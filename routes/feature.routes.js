const featureController = require('../controllers/feature.controller.js') // importar el controlador de caracteristica
const express = require('express') //importar los metodos de la librería express para creación de API 
const router = express.Router()

// Asignar una metodo y una ruta a un controlador, y así consumir el endpoint 
router.get('/', featureController.getFeature)
router.get('/:featureId', featureController.getFeatureById)
router.post('/', featureController.createFeature)
router.get('/featureList/:shipId', featureController.getFeatureList)
router.post('/featureList', featureController.createFeatureList)

module.exports = router