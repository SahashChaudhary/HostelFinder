const express = require("express");
const { userRegister } = require("../controller/userController");
const router = express.Router();

router.post("/user_registration", userRegister);


module.exports = router;