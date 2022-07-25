const typeController = require('../controllers/type.controller.js') // importar el controlador de caracteristica
const express = require('express')//importar los metodos de la librería express para creación de API 
const router = express.Router()

// Asignar una metodo y una ruta a un controlador, y así consumir el endpoint 
router.get('/', typeController.getTypes)

module.exports = router