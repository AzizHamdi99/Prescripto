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
        console.log("found user")
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.json({ succes: false, message: "invalide credentials" })
        }
        const token = creatToken(user.id)
        res.json({
            success: true, token
        })

    } catch (error) {
        console.error("Login error:", error);
        res.json({
            success: false,
            message: "Something went wrong during login. Please try again later."
        });

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
        if (password.length < 8) {
            return res.json({ success: false, message: "enter a strong password" })
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
        const token = creatToken(user.id)
        res.json({ success: true, token })
    } catch (error) {
        console.error("Error adding user:", error);
        res.json({ success: false, message: "Error adding user" });

    }


}

const getUser = async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ success: false, message: "Unathorized" })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const userId = decoded.id
        let user = await User.findByPk(userId)
        if (!user) {
            return res.status(404).json({ success: false, message: "user not found" })
        }
        //res.status(200).send(user)
        res.json({ success: true, data: user });



    } catch (error) {
        res.status(404).json({ succes: false, message: "invalid token" })

    }


}


module.exports = {
    addUser, loginUser, getUser
}