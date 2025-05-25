const { Appointment } = require('../models');
exports.bookAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.create(req.body);
        res.status(201).json(appointment)
    }
    catch (error) {
        res.status(500).json({ error: "error booking appointment" })

    }
}