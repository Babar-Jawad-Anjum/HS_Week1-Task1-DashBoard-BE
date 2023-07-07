const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  gender: String,
  phone: String,
});

module.exports = mongoose.model("User", userSchema);
