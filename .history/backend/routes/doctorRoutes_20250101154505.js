const express = require('express');
const doctorControllers = require('../controllers/doctorController.js');

const router = express.Router();

router.post('/addDoctor', doctorControllers.upload, doctorControllers.addDoctor);
router.get('/getAllDoctors', doctorControllers.getAllDoctors);
router.get('/:id', doctorControllers.getDoctor);


module.exports = router