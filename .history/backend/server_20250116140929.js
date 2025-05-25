const express = require('express')
const db = require('./models')
const app = express();
require('dotenv').config();
const doctorRouter = require("./routes/doctorRoutes")
const userRouter = require("./routes/userRoutes")
const appointmentRouter = require("./routes/appointmentRoutes")

const cors = require('cors');
app.use(cors());




app.use(express.json());

//routers

app.use('/api/doctors', doctorRouter)

app.use('/api/user', userRouter)

app.use('/api/appointment', appointmentRouter)


app.use('/Images', express.static('./Images'))






app.get('/', (req, res) => {
    res.send('welcome to the hosbital management api');
});
const port = 3000;
app.listen(port, () => {
    console.log(`server is running on server ${port}`);
})