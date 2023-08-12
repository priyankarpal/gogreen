const mongoose = require("mongoose");

const hotelsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  owner_id: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  web_link: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  contact_no: {
    type: Number,
    required: true,
  },
  booking_open: {
    type: Boolean,
    required: true,
  },
  eco_friendly: {
    type: Boolean,
    default: false,
  },
  service_type: {
    type: String,
    required: true,
  },
});

const Hotel = mongoose.model("Hotel", hotelsSchema);

module.exports = Hotel;
