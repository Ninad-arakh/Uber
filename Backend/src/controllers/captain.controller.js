const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");
const blacklistTokenModel = require("../models/blacklistToken.model");

module.exports.registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullName, email, password, vehicle } = req.body;


  const existingCaptain = await captainModel.findOne({ email });
  if (existingCaptain) {
    return res
      .status(400)
      .json({ message: "Captain with this email already exists" });
  }

  const hashedPassword = await captainModel.hashPassword(password);

  const captain = await captainService.createCaptain({
    firstName: fullName.firstName,
    lastName: fullName.lastName,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  const token = await captain.generateAuthToken(captain._id);


  res.status(201).json({
    message: "Captain registered successfully",
    captain: {
      _id: captain._id,
      fullName: captain.fullName,
      email: captain.email,
      vehicle: captain.vehicle,
    },
    token,
  });
};

module.exports.loginCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;

  const captain = await captainModel.findOne({email}).select('+password');;
  if (!captain) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isMatch = await captain.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = captain.generateAuthToken();

  res.cookie("token", token);

  res.status(200).json({
    message: "Captain logged in successfully",
    captain,
    token,
  });
};

module.exports.getCaptainProfile = async (req, res, next) => {
  res
    .status(200)
    .json({
      message: "Captain profile retrieved successfully",
      captain: req.captain,
    });
};

module.exports.logoutCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  await blacklistTokenModel.create({token});
  res.clearCookie("token");
  res.status(200).json({ message: "Captain logged out successfully" });
};