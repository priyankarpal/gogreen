const mongoose = require("mongoose");

const hotelsSchema = new mongoose.Schema(
  {
    hotelName: {
      type: String,
      // required: true,
    },
    // email: {
    //   type: String,
    //   required: true,
    // },
    // password: {
    //   type: String,
    //   required: true,
    // },
    owner_id: {
      type: String,
      required: true,
    },
    streetAddress: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    rooms: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    eco_friendly: {
      type: Boolean,
      default: false,
    },
    ratings: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
  },
  { timestamps: true }
);

const Hotel = mongoose.model("Hotel", hotelsSchema);

module.exports = Hotel;
