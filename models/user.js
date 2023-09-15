const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isEmail } = require("validator");
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "please enter email"],
    lowercase: true,
    validate: [isEmail, "email is not valid"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "please enter password"],
    minlength: [6, "min length is 6"],
  },

  username: {
    type: String,
    required: [true, "please enter username"],
    minlength: [4, "min length is 4"],
  },
});

UserSchema.pre("save", async function (user) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  console.log(this);
});

UserSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};
const User = mongoose.model("neoUser", UserSchema);

module.exports = User;
