import mongoose from 'mongoose'
const ProductSchema = new mongoose.Schema({
  uuid: {
    type: String,
    required: 'GUID is required',
    unique: true
  },
  shopUuid: {
    type: String
  },
  name: {
    type: String,
    trim: true,
    required: 'Name is required'
  },
  show: {
    type: Boolean,
    default: 1
  },
  active: {
    type: Boolean,
    default: 1
  },
  available: {
    type: Boolean,
    default: 1
  },
  onlyWithSpecifications: {
    type: Boolean,
    default: 0
  },
  groupWith: {
    type: String,
    default: ""
  },
  groupName: {
    type: String,
    default: ""
  },
  groupWeight: {
    type: String,
    default: ""
  },
  image: {
    type: String,
    contentType: String
  },
  description: {
    type: String,
    trim: true
  },
  categoryId: {
    type: String
  },
  quantity: {
    type: Number,
    default: 100000000,
    required: "Quantity is required"
  },
  price: {
    type: Number,
    required: "Price is required"
  },
  fakeprice: {
    type: Number,
    default: 100000,
    required: "Price is required"
  },
  calories: {
    type: Number,
    default: 0
  },
  fat: {
    type: Number,
    default: 0
  },
  protein: {
    type: Number,
    default: 0
  },
  carbohydrate: {
    type: Number,
    default: 0
  },
  weight: {
    type: Number,
    default: 0
  },
  measure: {
    type: String,
    default: "шт"
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },
  shop: {type: mongoose.Schema.ObjectId, ref: 'Shop'}
})

export default mongoose.model('Product', ProductSchema)
