const { Sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    const Appointment = sequelize.define()

    return Appointment;
};
