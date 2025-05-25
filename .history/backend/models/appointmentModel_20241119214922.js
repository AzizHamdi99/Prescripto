const { Sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    const Appointment = sequelize.define('Appointment', {
        appointmentId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        patientId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'userId',
            },
        },
        doctorId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Doctors',
                key: 'doctorId',
            },
        },
        appointmentDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('booked', 'completed', 'cancelled'),
            allowNull: false,
        },
    }, {
        tableName: 'Appointments',
        timestamps: true,
    });

    return Appointment;
};
