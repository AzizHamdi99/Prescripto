const { where } = require('sequelize');
const { User } = require('../models');

const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return res.json({ succes: false, message: "User doesn't exist" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.json({ succes: false, message: "invalide crenditionals" })
        }
        const token = creatToken(user.id)
        res.json({
            success: true, token
        })

    } catch (error) {
        res.json({
            succes: false,
            message: error
        })

    }



}

const creatToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)


}

const addUser = async (req, res) => {
    const { name, email, phone, address, birthday, gender, password } = req.body
    try {
        let exist = await User.findOne({ where: { email } })
        if (exist) {
            return res.json({ success: false, message: "User already exist" })
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "enter a valid email" })

        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        let info = {
            name: name,
            email: email,
            phone: phone,
            address: address,
            birthday: birthday,
            gender: gender,
            password: hashedPassword
        }
        const user = await User.create(info)
        // const token = creatToken(user.id)
        res.json({ success: true, })
    } catch (error) {
        console.error("Error adding user:", error);
        res.json({ success: false, message: "Error adding user" });

    }


}
module.exports = {
    addUser, loginUser
}