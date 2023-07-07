const mongoose = require("mongoose");

var adminSchema = mongoose.Schema({
  email: String,
  password: String,
});

module.exports = mongoose.model("Admin", adminSchema);
