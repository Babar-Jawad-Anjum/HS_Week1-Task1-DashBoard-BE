var express = require("express");
var router = express.Router();
const {
  addUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  editUser,
  sortUsers
} = require("../controller/user");

/* Add new user route */
router.post("/add-user", addUser);

/* Get all users */
router.get("/getAllUsers", getAllUsers);

//Get user for edit
router.get("/getUser/:id", getSingleUser);

//Edit user
router.post("/user/edit/:id", editUser);

//Delete User
router.delete("/delete/:id", deleteUser);

//Sort Users
router.get("/sortUsers", sortUsers);

module.exports = router;
