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

        }
    }, {
        tableName: "appointments",
        timestamps: true,
    })

    Appointment.associate = (models) => {
        Appointment.belongsTo(models.User, { foreignKey: "user_id", onDelete: "CASCADE" });
        Appointment.belongsTo(models.Doctor, { foreignKey: "doctor_id", onDelete: "CASCADE" });
    };

    return Appointment;
};
