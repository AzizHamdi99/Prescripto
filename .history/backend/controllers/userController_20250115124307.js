const { where } = require('sequelize');
const { User } = require('../models');
import validator from "validator"

const addUser = async (req, res) => {
    const { name, email, phone, address, birthday, gender, password } = req.body
    try {
        let exist = await User.findOne({ where: { email: email } })
        if (exist) {
            return res.json({ success: false, message: "User already exist" })
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "enter a valid email" })

        }
        let info = {
            name: name,
            email: email,
            phone: phone,
            address: address,
            birthday: birthday,
            gender: gender,
            password: password
        }
        const userInfo = await User.create(info)
        res.status(200).send(userInfo)
    } catch (error) {

    }


}
