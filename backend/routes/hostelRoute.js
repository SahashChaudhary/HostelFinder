const express = require("express");
const {
  createRoom,
  getRoom,
  getRoomByCatagoryBoysHostel,
  getRoomByCatagoryGirlsHostel,
  getSingleHostel,
} = require("../controller/hostelController");
const router = express.Router();
const multer = require("multer");
const { requireSignIn } = require("../middleware/authMiddleware");

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

router.post(
  "/add_hostel",
  requireSignIn,
  upload.array("photos", 12),
  createRoom
);
router.get("/hostel", getRoom);
router.get("/catagory/boyshostel", getRoomByCatagoryBoysHostel);
router.get("/catagory/girlshostel", getRoomByCatagoryGirlsHostel);
router.get("/hostel/:rid", getSingleHostel);

module.exports = router;
