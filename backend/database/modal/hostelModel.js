const mongoose = require("mongoose");
const hostelSchema = mongoose.Schema(
  {
    price: { type: Number },
    title: { type: String },
    description: {
      type: String,
      required: true,
    },
    img_collection: [Object],
    phone: { type: Number },
    address: { type: String, required: true },
    catagory: { type: String, default: "Boys hostel" },
  },
  { timestamps: true }
);

const hostelModel = mongoose.model("hostel", hostelSchema);

module.exports = hostelModel;
