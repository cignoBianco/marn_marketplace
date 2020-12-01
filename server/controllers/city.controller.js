import City from '../models/city.model'
import Address from '../models/address.model'
import extend from 'lodash/extend'
import errorHandler from './../helpers/dbErrorHandler'
import formidable from 'formidable'
import fs from 'fs'
import defaultImage from './../../client/assets/images/default.png'

const create = (req, res) => {
  const fs = require('fs')
  fs.readFile('server/files/cities', 'utf8', (err, data) => {
    if (err) {
      console.log(err)
    }
    console.log(111,JSON.parse(data))
    data = JSON.parse(data)
    console.log(222, data, data['cities'])
    data['cities'].forEach(async (item) => {
      let city = new City({uuid: item.id, active: item.active, name: item.name})
      try {
        let result = await city.save()
        res.status(200).json(result)
      }catch (err){
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
    })
  })
}

const cityByName = async (req, res, next, cityName) => {
  try {
    console.log(cityName)
    let city = await City.findOne({name: cityName})
    if (!city)
      return res.status('400').json({
        error: `Сity ${cityName} not found`
      })
    req.city = city
    console.log(req.city)
    res.status(200).json(city)
    //next()
  } catch (err) {
    return res.status('400').json({
      error: "Could not retrieve shop"
    })
  }
}

const photo = (req, res, next) => {
  if(req.shop.image.data){
    res.set("Content-Type", req.shop.image.contentType)
    return res.send(req.shop.image.data)
  }
  next()
}
const defaultPhoto = (req, res) => {
  return res.sendFile(process.cwd()+defaultImage)
}

const read = (req, res) => {
  req.shop.image = undefined
  return res.json(req.shop)
}

const update = (req, res) => {
  let form = new formidable.IncomingForm()
  form.keepExtensions = true
  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.status(400).json({
        message: "Photo could not be uploaded"
      })
    }
    let shop = req.shop
    shop = extend(shop, fields)
    shop.updated = Date.now()
    if(files.image){
      shop.image.data = fs.readFileSync(files.image.path)
      shop.image.contentType = files.image.type
    }
    try {
      let result = await shop.save()
      res.json(result)
    }catch (err){
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  })
}

const remove = async (req, res) => {
  try {
    let shop = req.shop
    let deletedShop = shop.remove()
    res.json(deletedShop)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }  
}

const list = async (req, res) => {
  try {
    let cities = await City.find()
    console.log(cities, cities[0].name)
    res.json(cities)
  } catch (err){
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const createAddress = (req, res) => {
  const fs = require('fs')
  fs.readFile('server/files/addresses', 'utf8', (err, data) => {
    if (err) {
      console.log(err)
    }
    console.log(JSON.parse(data))
    data = JSON.parse(data)
    data['addresses'].forEach(async (item) => {
      let address = new Address({uuid: item.id, active: 1, name: item.name, cityId: data['cityId']})
      try {
        let result = await address.save()
        res.status(200).json(result)
      }catch (err){
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
    })
  })
}



const listAddresses = async (req, res) => {
  try {
    let addresses = await Address.find()
    console.log(addresses, addresses[0].name)
    res.json(addresses)
  } catch (err){
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}


export default {
  create,
  cityByName,
  photo,
  defaultPhoto,
  list,
  read,
  update,
  remove,
  createAddress,
  listAddresses
}
