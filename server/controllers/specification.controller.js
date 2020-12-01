import Specification from '../models/specification.model'
import Product from '../models/product.model'
import errorHandler from './../helpers/dbErrorHandler'
import formidable from 'formidable'
import fs from 'fs'
import defaultImage from './../../client/assets/images/default.png'

const createSpecification = (data, productId) => {
    console.log('sp:', data)
    data.forEach(async item => {
        let specification = new Specification({
            productId: productId,
            specificationId: item.id
        })
        try {
            let result = await specification.save()
            console.log('specifications were successfully saved')
        } catch(err) {
            console.log(err)
        }
    })
}

const getSpecifications = async (req, res) => {
    try {
      let products = await Specification.find()
      res.json(products)
    } catch (err){
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  }

export default {
    createSpecification,
    getSpecifications
}

