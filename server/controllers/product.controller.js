import Product from '../models/product.model'
import Shop from '../models/shop.model'
import extend from 'lodash/extend'
import errorHandler from './../helpers/dbErrorHandler'
import formidable from 'formidable'
import fs from 'fs'
import defaultImage from './../../client/assets/images/default.png'
import createSpecification from './../controllers/specification.controller'
import Specification from '../models/specification.model'

const create = (req, res, next) => {
  let form = new formidable.IncomingForm()
  form.keepExtensions = true
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        message: "Image could not be uploaded"
      })
    }
    let product = new Product(fields)
    product.shop= req.shop
    if(files.image){
      product.image.data = fs.readFileSync(files.image.path)
      product.image.contentType = files.image.type
    }
    try {
      let result = await product.save()
      res.json(result)
    } catch (err){
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  })
}

const createProducts = (req, res) => {
  const fs = require('fs')
  fs.readFile('server/files/menues', 'utf8', (err, data) => {
    if (err) {
      console.log(err)
    }
   // console.log(JSON.parse(data))
    data = JSON.parse(data)
    const organizationUid = data['organizationId']
    data['products'].forEach(async (item) => {
      let products = new Product({uuid: item.id, price: item.price, fakeprice: item.fakeprice,
        available: item.available, onlyWithSpecifications: item.onlyWithSpecifications,
         active: item.active, show: item.show, name: item.name, groupWith: item.groupWith,
         groupName: item.groupName, groupWeight: item.groupWeight, shopUuid: organizationUid,
         categoryId: item.categoryId, description: item.description, quantity: item.quantity,
         calories: item.calories, fat: item.fat, protein: item.protein, carbohydrate: item.carbohydrate,
         weight: item.weight, measure: item.measure, image: item.images.image,
         organizationId: data['organizationId']})
         console.log("prodtcst 54: ", products)
          let productId = item.id
         let specifications = item.specifications.forEach( async (sp) => {
        
          let specification = new Specification({
              productId: productId,
              specificationId: sp['id']
          })
          try {
              let result = await specification.save()
              console.log('specifications were successfully saved')
          } catch(err) {
              console.log(err)
          }
      })
      console.log(43534,item.specifications, productId)
         // spec data, productId
       // createSpecification(item.specifications, productId)
      try {
        let result = await products.save()
        res.status(200).json(result)
      }catch (err){
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
    })
  })
}

const productByShopID = async (req, res, next, shopId) => {
  try {
    let shopUuid = await Shop.findById(shopId)
    console.log('shopuuuid1: ', shopUuid)
    shopUuid = shopUuid['uuid']
    console.log("shopId2: ", shopId, "shopUuid: ", shopUuid)
    let products = await Product.find({shopUuid: shopUuid})
    products.forEach((p)=>{
      //let specifications
    })
    if (!products)
      return res.status('400').json({
        error: "Products not found"
      })
      console.log("rpdocucts...")
let r = res.status(200).json(products)
console.log(r)
    return r
  } catch (err) {
    return res.status('400').json({
      error: "Could not retrieve product"
    })
  }
}

const productByCategoryID = async (req, res, next, categoryId) => {
  try {
    let products = await Product.find({categoryId: categoryId})
    if (!products)
      return res.status('400').json({
        error: "Products not found"
      })
    return res.status(200).json(products)
  } catch (err) {
    return res.status('400').json({
      error: "Could not retrieve product",
      data: categoryId
    })
  }
}

const productByID = async (req, res, next, id) => {
  try {
    let product = await Product.findById(id).populate('shop', '_id name').exec()
    if (!product)
      return res.status('400').json({
        error: "Product not found"
      })
    req.product = product
    next()
  } catch (err) {
    return res.status('400').json({
      error: "Could not retrieve product"
    })
  }
}

const photo = (req, res, next) => {
  if(req.product.image.data){
    res.set("Content-Type", req.product.image.contentType)
    return res.send(req.product.image.data)
  }
  next()
}
const defaultPhoto = (req, res) => {
  return res.sendFile(process.cwd()+defaultImage)
}

const read = (req, res) => {
  req.product.image = undefined
  return res.json(req.product)
}

const update = (req, res) => {
  let form = new formidable.IncomingForm()
  form.keepExtensions = true
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        message: "Photo could not be uploaded"
      })
    }
    let product = req.product
    product = extend(product, fields)
    product.updated = Date.now()
    if(files.image){
      product.image.data = fs.readFileSync(files.image.path)
      product.image.contentType = files.image.type
    }
    try {
      let result = await product.save()
      res.json(result)
    }catch (err){
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  })
}

const remove = async (req, res) => {
  try{
    let product = req.product
    let deletedProduct = await product.remove()
    res.json(deletedProduct)
  
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const listByShop = async (req, res) => {
  try {
    let products = await Product.find({shop: req.shop._id}).populate('shop', '_id name').select('-image')
    res.json(products)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const listLatest = async (req, res) => {
  try {
    let products = await Product.find({}).sort('-created').limit(5).populate('shop', '_id name').exec()
    res.json(products)
  } catch (err){
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const listRelated = async (req, res) => {
  try{
    let products = await Product.find({ "_id": { "$ne": req.product }, "category": req.product.category}).limit(5).populate('shop', '_id name').exec()
    res.json(products)
  } catch (err){
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const listCategories = async (req, res) => {
  try {
    let products = await Product.distinct('category',{})
    res.json(products)
  } catch (err){
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const list = async (req, res) => {
  const query = {}
  if(req.query.search)
    query.name = {'$regex': req.query.search, '$options': "i"}
  if(req.query.category && req.query.category != 'All')
    query.category =  req.query.category
  try {
    let products = await Product.find(query).populate('shop', '_id name').select('-image').exec()
    res.json(products)
  } catch (err){
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const decreaseQuantity = async (req, res, next) => {
  let bulkOps = req.body.order.products.map((item) => {
    return {
        "updateOne": {
            "filter": { "_id": item.product._id } ,
            "update": { "$inc": {"quantity": -item.quantity} }
        }
    }
   })
   try {
     await Product.bulkWrite(bulkOps, {})
     next()
   } catch (err){
      return res.status(400).json({
        error: "Could not update product"
      })
   }
}

const increaseQuantity = async (req, res, next) => {
  try {
    await Product.findByIdAndUpdate(req.product._id, {$inc: {"quantity": req.body.quantity}}, {new: true})
    .exec()
      next()
  } catch (err){
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

export default {
  create,
  createProducts,
  productByID,
  productByCategoryID,
  productByShopID,
  photo,
  defaultPhoto,
  read,
  update,
  remove,
  listByShop,
  listLatest,
  listRelated,
  listCategories,
  list,
  decreaseQuantity,
  increaseQuantity
}
