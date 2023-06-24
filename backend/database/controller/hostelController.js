const hostelModel = require("../modal/hostelModel");

exports.createRoom = async (req, res) => {
  try {
    const { title, price, phone, address, description } = req.body;
    console.log(req.body);
    const newHostel = new hostelModel({
      title,
      price,
      phone,
      address,
      description,
    });
    await newHostel.save();
    res.status(201).send({
      success: true,
      message: "Your Hostel Created",
      result: newHostel,
    });
  } catch (error) {
    console.log(error, "create room");
    res.status(500).send({
      success: false,
      message: "Failed to create room",
    });
  }
};

//get all room

exports.getRoom = async (req, res) => {
    try {
      const rooms = await hostelModel
        .find({})
        .sort({ createdAt: -1 });
  
  
      res.status(200).send({
        success: true,
        counTotal: rooms.length,
        message: "Get all hostel",
        rooms
      })
  
    } catch (error) {
      console.log(error)
      res.status(500).send({
        success: false,
        error: error.message,
        message: "error in getting room"
      })
    }
  }