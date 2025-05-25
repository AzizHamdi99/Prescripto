const express = require('express');
const { bookAppointment, getUserAppointment, deleteAppointment } = require("../controllers/appointmentController");
const router = express.Router()

router.post('/bookAppointment', bookAppointment);
router.get('/getUserAppointment', getUserAppointment);
router.post('/deleteAppointment', deleteAppointment);

module.exports = router