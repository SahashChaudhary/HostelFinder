const express = require("express");
const { createRoom, getRoom } = require("../controller/hostelController");
const router = express.Router();

router.post("/add_hostel", createRoom);
router.get('/hostel', getRoom)


module.exports = router;
