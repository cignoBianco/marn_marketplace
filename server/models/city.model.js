import mongoose from 'mongoose'
const uniqueValidator = require('mongoose-unique-validator')
const CitySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Name is required',
    unique: true
  },
  active: {
    type: Boolean,
    default: 1
  },
  uuid: {
    type: String,
    trim: true,
    unique: true
  },
  category: {
    type: String,
    trim: true
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },
})
CitySchema.plugin(uniqueValidator)

export default mongoose.model('City', CitySchema)
