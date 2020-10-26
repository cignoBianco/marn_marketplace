import Category from '../models/category.model'
import Address from '../models/address.model'
import extend from 'lodash/extend'
import errorHandler from './../helpers/dbErrorHandler'
import formidable from 'formidable'
import fs from 'fs'
import defaultImage from './../../client/assets/images/default.png'

const createCategories = (req, res) => {
  const fs = require('fs')
  fs.readFile('server/files/categories', 'utf8', (err, data) => {
    if (err) {
      console.log(err)
    }
    console.log(JSON.parse(data))
    data = JSON.parse(data)
    data['categories'].forEach(async (item) => {
      let category = new Category({uuid: item.id, parentId: item.parentId,
         active: item.active, show: item.show, name: item.name, organizationId: data['organizationId']})
      try {
        let result = await category.save()
        res.status(200).json(result)
      }catch (err){
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
    })
  })
}

const categoryById = async (req, res, next, id) => {
  try {
    let category = await Category.find({organizationId: id})
    if (!category)
      return res.status('400').json({
        error: `category  not found`
      })
    req.category = category
    console.log(req.category)
    res.status(200).json(category)
    //next()
  } catch (err) {
    return res.status('400').json({
      error: "Could not retrieve shop"
    })
  }
}



const listCategories = async (req, res) => {
  try {
    let categories = await Category.find()
    console.log(categories, categories[0].name)
    res.json(categories)
  } catch (err){
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

export default {
  createCategories,
  categoryById,
  listCategories
}
