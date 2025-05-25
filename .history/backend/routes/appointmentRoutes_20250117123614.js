const express = require('express');
const { bookAppointment, getUserAppointment, deleteAppointment, getAllAppointments } = require("../controllers/appointmentController");
const router = express.Router()

router.post('/bookAppointment', bookAppointment);
router.get('/getUserAppointment', getUserAppointment);
router.post('/deleteAppointment', deleteAppointment);
router.get('/getAllAppointments', getAllAppointments);


module.exports = router