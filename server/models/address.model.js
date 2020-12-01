import mongoose from 'mongoose'
const AddressSchema = new mongoose.Schema({
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
  cityId: {
    type: String,
    trim: true
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },
})

export default mongoose.model('Address', AddressSchema)
