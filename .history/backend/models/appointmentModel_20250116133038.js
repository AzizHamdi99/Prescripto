const { Sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    const Appointment = sequelize.define("Appointment", {
        user_id: {
            type: DataTypes.INTEGER
        }




    })

    return Appointment;
};
