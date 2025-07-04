const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    firstName: {
      type: String,
      required: true,
      minlength: [3, "minimum length of first name is 3 characters"],
    },
    lastName: {
      type: String,
      minlength: [3, "minimum length of last name is 3 characters"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [6, "minimum length of last name is 6 characters"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this.id }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
  return token;
};

userSchema.methods.comparePasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPasswords = async function (password) {
  return await bcrypt.hash(password, 5);
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
