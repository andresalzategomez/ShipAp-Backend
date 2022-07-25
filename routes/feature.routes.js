const featureController = require('../controllers/feature.controller.js')
const express = require('express')
const router = express.Router()

router.get('/', featureController.getFeature)
router.get('/:featureId', featureController.getFeatureById)
router.post('/', featureController.createFeature)
router.get('/featureList/:shipId', featureController.getFeatureList)
router.post('/featureList', featureController.createFeatureList)

module.exports = router