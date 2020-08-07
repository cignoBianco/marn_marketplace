import mongoose from 'mongoose';
import crypto from 'crypto';
const CitySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Name is required',
  },
  guid: {
    type: String,
    required: "Guid is required",
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('City', CitySchema)
