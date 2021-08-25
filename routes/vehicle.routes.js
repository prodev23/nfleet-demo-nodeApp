const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicle.controller');
const authJwt = require('../middlewares/authJwt');

router.get('/getVehicles', [authJwt.verifyToken], vehicleController.getVehicles);
router.post('/addVehicle', [authJwt.verifyToken], vehicleController.addVehicle);
router.put('/updateVehicle/:id', [authJwt.verifyToken], vehicleController.updateVehicle);

module.exports = router;