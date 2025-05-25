const { where } = require('sequelize');
const { User } = require('../models');

const addUser = async (req, res) => {
    const { name, email, phone, address, birthday, gender, password } = req.body
    let exist = await User.findOne({ where: { email: email } })
    if (exist) {
        return res.json({ success: false, message: "User already exist" })
    }


}
