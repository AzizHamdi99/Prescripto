const express = require('express');
const { addUser, loginUser, getUser, getAllUsers, nbUsers } = require('../controllers/userController');
const router = express.Router();

router.post('/register', addUser);
router.post('/login', loginUser);

router.get('/profile', getUser);
router.get('/getAllUsers', getAllUsers);
router.get('/nbUsers', nbUsers);
module.exports = router