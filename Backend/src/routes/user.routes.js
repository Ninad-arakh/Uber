const express = require('express');
const router = express.Router();
const { body } = require('express-validator')
const userController = require('../controllers/user.controller')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullName.firstName').isLength({min:3}).withMessage("minimum length of first name is 3 characters"),
    body('password').isLength({min:6}).withMessage("password must be 5 char long"),

    userController.registerUser
])

module.exports= router;