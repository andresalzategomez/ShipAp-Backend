const typeController = require('../controllers/type.controller.js')
const express = require('express')
const router = express.Router()

router.get('/', typeController.getTypes)



module.exports = router