const express = require("express");
const { createRoom, getRoom, getRoomByCatagoryBoysHostel, getRoomByCatagoryGirlsHostel } = require("../controller/hostelController");
const router = express.Router();

router.post("/add_hostel", createRoom);
router.get('/hostel', getRoom)
router.get('/catagory/boyshostel',getRoomByCatagoryBoysHostel)
router.get('/catagory/girlshostel',getRoomByCatagoryGirlsHostel)


module.exports = router;
