const { Appointment } = require('../models');


const addAppointment = async (req, res) => {
    try {
        let info = {
            user_id: req.user_id,
            doctor_id: req.docotr_id,
            date: req.date,
            time: req.time
        }
        const data = await Appointment.create(info)
        res.status(200).send(data)

    } catch (eroor) {
        console.log("error adding appointment", eroor)
        res.json({ success: false, message: "error ading user" })
    }






}
