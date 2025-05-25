const express = require('express');
const { addUser, loginUser } = require('../controllers/userController');
const router = express.Router();

router.post('/register', addUser);
router.post('/login', loginUser);

module.exports = router