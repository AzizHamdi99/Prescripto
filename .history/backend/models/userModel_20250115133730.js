const { Sequelize, DataTypes } = require("sequelize");
const bcrypt = require('bcrypt');
module.exports = (Sequelize, DataTypes) => {
    const User = Sequelize.define('User', {

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,//should be crypted
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }

        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false

        },
        birthday: {
            type: DataTypes.DATE,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isNumeric: true,
                len: 8
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        }

    }, {
        tablename: "Users",
        timestamps: true
    });

    return User
}