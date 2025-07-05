const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainSchema = new mongoose.Schema({
  fullName: {
    firstName: {
      type: String,
      required: true,
      minlength: 3,
    },
    lastName: {
      type: String,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false,
  },
  socketId: {
    type: String,
    unique: true,
  },
  status: {
    type: String,
    enum: ["online", "offline", "away"],
    default: "offline",
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: 3,
    },
    plate: {
      type: String,
      required: true,
      unique: true,
      match: /^[A-Z0-9]{1,10}$/,
    },
    capacity: {
      type: Number,
      required: true,
      min: 2,
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ["car", "bike", "auto"],
    },
  },
  location: {
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
});

captainSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
  return token;
};

captainSchema.methods.comparePassword = async function (Password) {
  const isMatch = await bcrypt.compare(Password, this.password);
  return isMatch;
};

captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const Captain = mongoose.model("Captain", captainSchema);

module.exports = Captain;
