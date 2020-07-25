const mongoose = require("mongoose");

/**
 * MongoDB Models to create an user
 * @author Ruize Nie
 */
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  userType: {
    type: String,
    required: true,
    minlength: 1,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
