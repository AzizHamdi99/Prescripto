const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.js')['development'];

const sequelize = new Sequelize(

    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
        logging: false,
    }
)
sequelize.authenticate().then(() => {
    console.log("connected to db")

}).catch((error) => {
    console.log({ error_connection: error })

})

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;


db.User = require('./userModel')(sequelize, DataTypes);
db.Doctor = require('./doctorModel')(sequelize, DataTypes);
db.Appointment = require('./appointmentModel')(sequelize, DataTypes);


// db.Doctor.belongsTo(db.User, { foreignKey: 'userId' });
// db.Appointment.belongsTo(db.User, { foreignKey: 'patientId' });
// db.Appointment.belongsTo(db.Doctor, { foreignKey: 'doctorId' });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize.sync({ alter: false }).then(() => {
    console.log("yes re-cynced");
}).catch((e) => {



})
module.exports = db;