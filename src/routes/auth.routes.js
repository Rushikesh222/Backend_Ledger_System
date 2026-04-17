const express = require('express');

const router = express.Router();

const { userRegisterController,userLoginController, userLogoutController } = require('../controllers/auth.controller');

// Register route
router.post('/register', userRegisterController);

// Login route
router.post('/login', userLoginController);

// Logout route
router.post('/logout', userLogoutController);


module.exports = router;