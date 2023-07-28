const mongoose = require("mongoose");
const hostelSchema = mongoose.Schema(
  {
    lng: { type: Number, required: true },
    lat: { type: Number, required: true },
    price: { type: Number, required: true },
    title: { type: String, required: true },
    description: {
      type: String,
      required: true,
    },
    img_collection: [Object],
    phone: { type: Number },
    address: { type: String, required: true },
    catagory: { type: String, default: "Boys hostel" },
    features: {
      type: String,
    },
    userInfo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    uid: { type: String, required: true },
    uName: { type: String, required: true },
    uEmail: { type: String, required: true },
    uPhone: { type: String, required: true },
    // uPhoto: { type: String, default: "" },
  },
  { timestamps: true }
);

const hostelModel = mongoose.model("hostel", hostelSchema);

module.exports = hostelModel;
