import express from 'express'
import specificationCtrl from '../controllers/specification.controller'

const router = express.Router()

router.route('/api/specifications')
    .get(specificationCtrl.getSpecifications)

export default router