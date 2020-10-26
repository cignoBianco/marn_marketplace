import mongoose from 'mongoose'
const CategorySchema = new mongoose.Schema({
  organizationId: {
    type: String,
    trim: true
  },
  name: {
    type: String,
    trim: true,
    required: 'Name is required',
  },
  active: {
    type: Boolean,
    default: 1
  },
  show: {
    type: Boolean,
    default: 1
  },
  uuid: {
    type: String,
    trim: true,
  },
  parentId: {
    type: String,
    trim: true,
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },
})

export default mongoose.model('Category', CategorySchema)
