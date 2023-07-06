const userModel = require("../modal/userModal");

exports.userRegister = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    //backend validationssss
    if (!name) {
      return res.status(500).send("Name is required");
    }
    if (!email) {
      return res.status(500).send("Email is required");
    }
    if (!phone) {
      return res.status(500).send("Phone is required");
    }
    if (!password) {
      return res.status(500).send("Password is required");
    }

    //check user
    const existingUser = await userModel.findOne({ email, phone });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "Already user",
      });
    }
    // const hashedPassword = await hashPassword(password)

    let user = await new userModel({
      name,
      email,
      phone,
      password,
    }).save();

    res.status(200).send({
      success: true,
      message: "successfull register",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Registration Failed",
    });
  }
};

//log in controller

exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password"
      })
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }

    // const match = await comparePassword(password, user.password);
    if (password !== user.password) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }

    res.send({
      success: true,
      message: "login successfull",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        // address: user.address,
        // role: user.role,
        // profile: user?.profile
      },

    })

  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: "login failed"
    })
  }
}