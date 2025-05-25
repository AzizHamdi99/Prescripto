const express = require('express');
const { bookAppointment, getUserAppointment } = require("../controllers/appointmentController");
const router = express.Router()

router.post('/bookAppointment', bookAppointment);
router.get('/getUserAppointment', getUserAppointment);

module.exports = router