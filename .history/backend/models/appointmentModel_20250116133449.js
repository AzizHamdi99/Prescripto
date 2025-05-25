const { Sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    const Appointment = sequelize.define("Appointment", {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        doctor_id: {
            type: DataTypes.INTEGER,
            allowNull: false

        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false

        },{

    }




    })

return Appointment;
};
