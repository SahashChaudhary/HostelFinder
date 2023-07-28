const hostelModel = require("../modal/hostelModel");

exports.createRoom = async (req, res) => {
  try {
    const reqFiles = [];
    const url = req.protocol + "://" + req.get("host");
    for (let i = 0; i < req.files.length; i++) {
      reqFiles.push(url + "/uploads/" + req.files[i].filename);
    }
    // const { title, price, phone, address, description, catagory, features,lng } =
    //   req.body;
    const { id: uid, uName, uPhoto, uPhone, uEmail } = req.user;
    const newHostel = new hostelModel({
      ...req.body,
      img_collection: reqFiles,
      uid,
      uName,
      // uPhoto,
      uPhone,
      uEmail,
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
    const rooms = await hostelModel.find({}).sort({ createdAt: -1 });

    res.status(200).send({
      success: true,
      counTotal: rooms.length,
      message: "Get all hostel",
      rooms,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error: error.message,
      message: "error in getting room",
    });
  }
};

// get hostel by catagory boys hostel
exports.getRoomByCatagoryBoysHostel = async (req, res) => {
  try {
    // Find all hostels with the category "Boys hostel"
    const hostels = await hostelModel.find({ catagory: "Boys hostel" });
    res.status(200).send({
      success: true,
      message: "get all hostel by category",
      hostels,
    });
  } catch (error) {
    console.error("Error retrieving hostels:", error);
  }
};

exports.getRoomByCatagoryGirlsHostel = async (req, res) => {
  try {
    // Find all hostels with the category "Boys hostel"
    const hostels = await hostelModel.find({ catagory: "Girls hostel" });
    res.status(200).send({
      success: true,
      message: "get all hostel by category",
      hostels,
    });
  } catch (error) {
    console.error("Error retrieving hostels:", error);
  }
};

// search bar
exports.searchRoom = async (req, res) => {
  try {
    const { keyword } = req.params;
    const resutls = await hostelModel.find({
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
        { features: { $regex: keyword, $options: "i" } },
        { address: { $regex: keyword, $options: "i" } },
      ],
    });
    res.send({ resutls });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error In Search Product API",
      error,
    });
  }
};

//get single room
exports.getSingleHostel = async (req, res) => {
  try {
    const hostel = await hostelModel.findById(req.params.rid);
    res.status(200).send({
      success: true,
      message: "get room success",
      hostel,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Failed to get room",
    });
  }
};

// update room

exports.updateHostel = async (req, res) => {
  try {
    const reqFiles = [];
    const url = req.protocol + "://" + req.get("host");
    for (let i = 0; i < req.files.length; i++) {
      reqFiles.push(url + "/uploads/" + req.files[i].filename);
    }
    const { id } = req.user; //user id
    const roomId = req.params.rid;
    const room = await hostelModel.findById(roomId);
    if (!room || room.uid !== id) {
      return res.status(403).send({
        success: false,
        message: "Access denied. You are not authorized to update this room.",
      });
    }
    room.img_collection = reqFiles;
    Object.assign(room, req.body); // Merge properties from req.body
    const updatedRoom = await room.save();

    await updatedRoom.save();
    res.status(200).send({
      success: true,
      message: "Hostel Updated SuccessFully",
      updatedRoom,
    });
  } catch (error) {
    console.log(error, "update error");
    res.status(500).send({
      success: true,
      message: "Error While Upadating Room",
    });
  }
};

//get all rooms of specific users

exports.getUserRooms = async (req, res) => {
  try {
    const userId = req.params.uid;
    const hostels = await hostelModel
      .find({ uid: userId })
      .select("-photo")
      .sort({ createdAt: -1 });

    res.status(200).send({
      success: true,
      message: "hostel Fetched",
      hostels,
    });
  } catch (error) {
    console.log(error, "from getUserRooms Controller");
    res.status(500).send({
      success: false,
      message: "Error while getting Rooms",
    });
  }
};

exports.deleteRoom = async (req, res) => {
  try {
    const { id: uid } = req.user;
    const roomId = req.params.rid;
    //rid =  room id
    const room = await hostelModel.findById(roomId);

    if (!room || room.id !== roomId) {
      return res.status(500).send({
        success: false,
        message: "Access denied. You are not authorized to delete this room.",
      });
    }
    await hostelModel.findByIdAndDelete(roomId);
    res.status(200).send({
      success: true,
      message: "Room deleted successfully.",
      room,
    });
  } catch (error) {
    console.log(error, "delete controller");
    res.status(500).send({
      success: false,
      message: "Failed to delete",
    });
  }
};
