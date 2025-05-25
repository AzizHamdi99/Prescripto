const { Appointment } = require('../models');


const bookAppointment = async (req, res) => {
    try {
        let info = {
            user_id: req.user_id,
            doctor_id: req.docotr_id,
            date: req.date,
            time: req.time,
            payed: req.payed
        }
        const data = await Appointment.create(info)
        res.status(200).send(data)

    } catch (eroor) {
        console.log("error adding appointment", eroor)
        res.json({ success: false, message: "error ading user" })
    }






}
module.exports = {
    bookAppointment
}
