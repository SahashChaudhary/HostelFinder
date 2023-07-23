const express = require("express");
const {
  createRoom,
  getRoom,
  getRoomByCatagoryBoysHostel,
  getRoomByCatagoryGirlsHostel,
} = require("../controller/hostelController");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/src/uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});

const upload = multer({ storage: storage });

router.post("/add_hostel", upload.array("photos", 12), createRoom);
router.get("/hostel", getRoom);
router.get("/catagory/boyshostel", getRoomByCatagoryBoysHostel);
router.get("/catagory/girlshostel", getRoomByCatagoryGirlsHostel);

module.exports = router;
