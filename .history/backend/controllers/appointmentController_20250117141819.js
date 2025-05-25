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

const deleteAppointment = async (req, res) => {
    const id = req.body.id
    try {
        const result = await Appointment.destroy({ where: { id: id } })
        res.json({ success: true, message: "Appointment deleted succesfully" })


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "error deleting appointment" })


    }

}
const getAllAppointments = async (req, res) => {
    try {
        const response = await Appointment.findAll({})
        res.status(200).send(response)
    } catch (error) {
        console.log(error)
        res.status(404).send(error)

    }
}
const nbAppointments = async (req, res) => {
    try {
        const response = await Appointment.count()
        console.log(response)
        res.status(200).send(response)
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
}
module.exports = {
    bookAppointment, getUserAppointment, deleteAppointment, getAllAppointments, nbAppointments
}
