const User = require("../models/user");

async function addUser(req, res) {
  const { name, email, gender, phone } = req.body;

  const user = new User();
  user.name = name;
  user.email = email;
  user.gender = gender;
  user.phone = phone;
  await user.save();

  res.send({ success: "User has been saved successfully" });
}

async function getAllUsers(req, res) {
  // pagination starts
  const page = req.query.page ? parseInt(req.query.page) : 1;
  const size = req.query.size ? parseInt(req.query.size) : 7;

  const skip = (page - 1) * size;

  const totalRecords = await User.countDocuments();

  const users = await User.find().skip(skip).limit(size);

  res.send({ users: users, totalRecords });
}

async function getSingleUser(req, res) {
  const id = req.params.id;

  const user = await User.findById(id);

  res.send({ user: user });
}
async function editUser(req, res) {
  const id = req.params.id;

  let user = await User.findById(id);
  user.name = req.body.name;
  user.email = req.body.email;
  user.gender = req.body.gender;
  user.phone = req.body.phone;
  await user.save();

  res.send({ success: "User Updated successfully" });
}

async function deleteUser(req, res) {
  const id = req.params.id;

  await User.findByIdAndDelete(id);

  res.send({ success: "User delete successfully" });
}

async function sortUsers(req, res) {
  const page = req.query.page ? parseInt(req.query.page) : 1;
  const size = req.query.size ? parseInt(req.query.size) : 5;

  const skip = (page - 1) * size;

  const totalRecords = await User.countDocuments();

  const users = await User.find().skip(skip).limit(size);

  const sortedUsers = users.sort((a, b) => a.name.localeCompare(b.name));

  res.send({ sortedUsers: sortedUsers, totalRecords });
}

module.exports = {
  addUser,
  getAllUsers,
  getSingleUser,
  editUser,
  deleteUser,
  sortUsers,
};
