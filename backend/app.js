const express = require('express');


const userRoutes = require('../backend/routes/userRoutes');
const doctorRoutes = require('../backend/routes/doctorRoutes');
const appointmentRoutes = require('../backend/routes/appointmentRoutes');
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json());
//app.use('/api/users', userRoutes);
//app.use('/api/doctors', doctorRoutes);
//app.use('/api/appointments', appointmentRoutes);

module.exports = app;