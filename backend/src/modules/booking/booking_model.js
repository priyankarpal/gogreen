const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const bookingSchema = new mongoose.Schema(
  {
    hotel_id: {
      type: String,
      required: true,
      unique: true,
    },
    from_date: {
      type: String,
      required: true,
    },
    to_date: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    persons: {
      type: Number,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },

  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
