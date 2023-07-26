const mongoose = require("mongoose");
const hostelSchema = mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

const hostelModel = mongoose.model("hostel", hostelSchema);

module.exports = hostelModel;
