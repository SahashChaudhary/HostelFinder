const mongoose = require("mongoose");
const hostelSchema = mongoose.Schema(
  {
    price: { type: Number },
    title: { type: String },
    description: {
      type: String,
      required: true,
    },
    phone: { type: Number },
    address: { type: String, required: true },
 
  },
  { timestamps: true }
);

const hostelModel = mongoose.model("hostel", hostelSchema);

module.exports = hostelModel;
