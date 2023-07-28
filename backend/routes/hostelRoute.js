const express = require("express");
const {
  createRoom,
  getRoom,
  getRoomByCatagoryBoysHostel,
  getRoomByCatagoryGirlsHostel,
  getSingleHostel,
  searchRoom,
  getUserRooms,
  updateHostel,
  deleteRoom,
  productListController,
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
  upload.array("photos", 12),
  requireSignIn,
  createRoom
);
router.get("/hostel", getRoom);
router.get("/catagory/boyshostel", getRoomByCatagoryBoysHostel);
router.get("/catagory/girlshostel", getRoomByCatagoryGirlsHostel);
router.get("/hostel/:rid", getSingleHostel);
//serch key
router.get("/search/:keyword", searchRoom);
router.get("/userRoom/:uid", getUserRooms);
router.put(
  "/update/:rid",
  upload.array("photos", 12),
  requireSignIn,
  updateHostel
);
//delete room
router.delete("/deleteHostel/:rid", requireSignIn, deleteRoom);
//
router.get("/product-list/:page", productListController);
module.exports = router;
