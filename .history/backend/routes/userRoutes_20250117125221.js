const express = require('express');
const { addUser, loginUser, getUser, getAllUsers } = require('../controllers/userController');
const router = express.Router();

router.post('/register', addUser);
router.post('/login', loginUser);

router.get('/profile', getUser);
router.get('/getAllUsers', getAllUsers);
module.exports = router