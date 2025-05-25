const { where } = require('sequelize');
const { Appointment } = require('../models');


const bookAppointment = async (req, res) => {
    try {
        let info = {
            user_id: req.body.user_id,
            doctor_id: req.body.doctor_id,
            date: req.body.date,
            time: req.body.time,
            payed: req.body.payed
        }
        const data = await Appointment.create(info)
        res.status(200).send(data)

    } catch (eroor) {
        console.log("error adding appointment", eroor)
        res.json({ success: false, message: "error ading appointment" })
    }



}




const getUserAppointment = async (req, res) => {
    const user_id = req.headers.authorization?.split(' ')[1];
    try {
        const response = await Appointment.findAll({ where: { user_id } })
        if (response.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No appointments found for this user."
            });
        }
        res.status(200).send(response)

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "error getting appointments" })
    }
}
module.exports = {
    bookAppointment, getUserAppointment
}
