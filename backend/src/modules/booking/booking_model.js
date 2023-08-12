const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const bookingSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    hotel_id: {
      type: String,
      required: true,
      unique: true,
    },
    booking_date: {
      type: String,
      required: true,
    },
    last_date: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
