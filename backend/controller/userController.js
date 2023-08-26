const { hashPassword, comparePassword } = require("../helper/useHelper");
const userModel = require("../modal/userModal");
const optModal = require("../modal/optVerificationModal");
const JWT = require("jsonwebtoken");
const nodemailer = require("nodemailer");
exports.userRegister = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    // Backend validations
    if (!name || !email || !phone || !password) {
      return res.status(400).send("All fields are required");
    }

    // Check if user already exists
    const existingUser = await userModel.findOne({ email, phone });
    if (existingUser) {
      return res.status(200).json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Create and save the user
    const user = await new userModel({
      name,
      email,
      phone,
      password: hashedPassword,
      verified: false,
    }).save();

    // Send OTP (assuming this function sends OTP asynchronously)
    await otpSend(user, res);

    // Send the success response
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Registration Failed",
    });
  }
};

//log in controller

exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(200).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    const user = await userModel.findOne({ email });
    console.log(user);
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "Email is not registerd",
      });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //check verified mail
    if (user.verified === false) {
      await otpSend(user, res);
    }
    //token
    const token = await JWT.sign(
      {
        _id: user._id,
        name: user.name,
        uPhoto: user.profile,
        uEmail: user.email,
        uPhone: user.phone,
      },
      process.env.SECRETE_KEY,
      {
        expiresIn: "7d",
      }
    );
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        // role: user.role,
        // profile: user?.profile
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "login failed",
    });
  }
};

//send otp
const otpSend = async ({ _id, email }, res) => {
  try {
    const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "Kookieraj@gmail.com",
        pass: "wafvdlxjgvapryog",
      },
    });
    await transporter.sendMail({
      from: "Kookieraj@gmail.com", // sender address
      to: email, // list of receivers
      subject: "Verify Your Email Address", // Subject line
      html: `<h>Enter <strong>${otp}</strong> to verify your email address</h1> `, // html body
    });
    const newOtpVerification = await new optModal({
      userId: _id,
      token: otp,
    });
    //save otp record
    await newOtpVerification.save();
    res.status(200).send({
      success: false,
      status: "pending",
      message: "verification otp send to your main",
      data: {
        userId: _id,
        email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "failed to send",
    });
  }
};
