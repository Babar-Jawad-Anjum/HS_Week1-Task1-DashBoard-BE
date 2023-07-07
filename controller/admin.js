require("dotenv").config();

const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");

async function adminLogin(req, res) {
  const { email, password } = req.body;

  let admin = await Admin.findOne({ email: email });
  if (!admin) return res.send({ error: "Incorrect Email" }); //if !exists return.

  if (admin.password !== password)
    return res.send({ error: "Incorrect Password" }); //if !exists return.

  // Generate a JWT token
  const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  return res.status(200).send({ success: "Logged in", token: token });
}

module.exports = { adminLogin };
