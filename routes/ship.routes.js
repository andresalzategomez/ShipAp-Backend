const shipController = require('../controllers/ship.controller.js')
const express = require('express')
const router = express.Router()

router.post('/', shipController.createShip)
router.get('/', shipController.getShips)
router.get('/:shipId', shipController.getShipId)
router.get('/name/:shipName/:column', shipController.getShipName)
router.get('/name/:featureId', shipController.getShipNameInner)
router.put('/:shipId', shipController.updateShipById)
router.delete('/:shipId', shipController.deleteShipById)


module.exports = router