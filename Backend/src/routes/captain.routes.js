const captainController = require("../controllers/captain.controller");
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captainMiddleware = require("../middlewares/auth.middleware");

router.post(
  "/register",
  [
    body('fullName.firstName')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("email").isEmail().withMessage("Invalid email format"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("vehicle.color")
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage("Vehicle color must be at least 3 characters long"),
    body("vehicle.plate")
      .isString() 
      .trim()
      .matches(/^[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{1,4}$/)
      .withMessage("Vehicle plate must be 1 to 10 capital letters (A-Z) with no spaces"),
    body("vehicle.capacity")
      .isInt({ min: 2 })
      .withMessage("Vehicle capacity must be at least 2"),
    body("vehicle.vehicleType")
      .isIn(["car", "bike", "auto"])
      .withMessage("Vehicle type must be one of: car, bike, auto"),
  ],
  captainController.registerCaptain
);

router.post('/login', [
  body("email").isEmail().withMessage("Invalid email format"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
],
  captainController.loginCaptain
);

router.get('/profile', captainMiddleware.captainAuth, captainController.getCaptainProfile);

router.get('/logout', captainMiddleware.captainAuth, captainController.logoutCaptain);



module.exports = router;
