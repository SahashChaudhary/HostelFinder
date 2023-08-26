const express = require("express");
const { userRegister, userLogin } = require("../controller/userController");
const router = express.Router();
const otpModal = require("../modal/optVerificationModal");
const useModal = require("../modal/userModal");
const userModel = require("../modal/userModal");

router.post("/user_registration", userRegister);
router.post("/login", userLogin);
router.post("/verify-otp", async (req, res) => {
  try {
    let { userId, otp } = req.body;
    if (!userId || !otp) {
      throw Error("Empty otp details are not allowed");
    } else {
      const userOtpVerificationRecord = await otpModal.find({ userId });
      if (userOtpVerificationRecord.length <= 0) {
        throw new Error(
          "Account record does not exist or has beed verified already. Please signin and login"
        );
      } else {
        await userModel.updateOne({ _id: userId }, { verified: true });
        await otpModal.deleteMany({ userId });
        res.status(200).send({
          status: true,
          message: "email verified",
        });
      }
    }
  } catch (error) {
    res.status(200).send({
      status: false,
      message: "emil failed to verify",
    });
  }
});

module.exports = router;
