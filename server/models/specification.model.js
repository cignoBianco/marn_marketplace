import mongoose from 'mongoose'
const SpecificationSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: 'Hey, you forgot about productUuid',
    },
    specificationId: {
        type: String,
        required: "Sprecification is missing",
    }
})

export default mongoose.model('Specification', SpecificationSchema)