const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const {isEmail} = require('validator')

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "please enter username"],
    unique: true,
    uppercase: true,
  },

  email: {
    type: String,
    required: [true, "please enter email"],
    unique: true,
    lowercase: true,
    validate: [isEmail , "email is not valid"]
  },

  password: {
    type: String,
    required: [true, "please enter password"],
    minlength: [6 , "min length is 6"],
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
