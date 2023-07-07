var express = require("express");
var router = express.Router();
const { adminLogin } = require("../controller/admin");

/* Admin login route */
router.post("/login", adminLogin);

module.exports = router;
