const express = require('express');
const router = express.Router();
const { body } = require('express-validator')
const userController = require('../controllers/user.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullName.firstName').isLength({min:3}).withMessage("minimum length of first name is 3 characters"),
    body('password').isLength({min:6}).withMessage("password must be 6 char long"),

    userController.registerUser
])

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage("password must be 6 char long"),
    userController.loginUser
])

router.get('/profile',authMiddleware.userAuth, userController.getUserProfile);

router.post('/logout',authMiddleware.userAuth, userController.logoutUser);

module.exports= router;