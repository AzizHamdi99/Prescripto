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
module.exports = {
    bookAppointment
}
