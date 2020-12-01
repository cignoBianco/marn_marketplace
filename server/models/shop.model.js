import mongoose from 'mongoose'
const ShopSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    
  },
  image: {
    data: Buffer,
    contentType: String
  },
  description: {
    type: String,
    trim: true
  },
  uuid: {
    type: String,
    trim: true,
    unique: true
  },
  category: {
    type: String,
    default: 'Restaurant',
    trim: true
  },
  active: {
    type:Boolean,
    default: true,
    trim: true
  },
  branches: {
    type: String,
    trim: true
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },
  //owner: {type: mongoose.Schema.ObjectId, ref: 'User'}
})

export default mongoose.model('Shop', ShopSchema)
//required: 'Name is required'