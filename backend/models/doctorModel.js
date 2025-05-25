const { Sequelize, DataTypes } = require("sequelize");
module.exports = (Sequelize, DataTypes) => {
    const Doctor = Sequelize.define('Doctor', {
        image: {
            type: DataTypes.STRING
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        speciality: {
            type: DataTypes.STRING,
            allowNull: false,


        },
        about: {
            type: DataTypes.TEXT('long'),
            allowNull: false,

        },
        experience: {
            type: DataTypes.INTEGER,
        },
        fees: {
            type: DataTypes.INTEGER,
        },
        education: {
            type: DataTypes.STRING
        }, address: {
            type: DataTypes.STRING
        }


    }, {
        tableName: 'Doctors',
        timestamps: true,
    })



    Doctor.associate = (models) => {
        Doctor.hasMany(models.Appointment, { foreignKey: "doctor_id", onDelete: "CASCADE" });
    };

    return Doctor;

}