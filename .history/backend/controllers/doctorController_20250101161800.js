
const { Doctor, User } = require('../models');

const multer = require('multer')
const path = require('path')

//add doctor
const addDoctor = async (req, res) => {
    let info = {
        image: req.file.path,
        name: req.body.name,
        email: req.body.email,
        experience: req.body.experience,
        fees: req.body.fees,
        speciality: req.body.speciality,
        education: req.body.education,
        address: req.body.address,
        about: req.body.about

    }
    const doctor = await Doctor.create(info)
    res.status(200).send(doctor)
    console.log(doctor)


}

//get all doctors
const getAllDoctors = async (req, res) => {

    let response = await Doctor.findAll({})
    res.status(200).send(response)


}

//get doctor by id
const getDoctor = async (req, res) => {
    let id = req.params.id
    let doctor = await Doctor.findOne({ where: { id: id } })
    res.status(200).send(doctor)

}
//uploid image controller

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: "1000000" },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))
        if (mimeType && extname) {
            return cb(null, true)
        }
        cb('Give file to upload')
    }
}).single('image')


module.exports = {
    addDoctor,
    getAllDoctors, getDoctor, upload
}