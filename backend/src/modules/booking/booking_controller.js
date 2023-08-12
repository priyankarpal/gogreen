const Booking = require("./booking_model");
const User = require("../users/user_model");
const Hotel = require("../hotels/hotel_model");

const creatBooking = async (req, res) => {
  const { user_id, hotel_id, form_date, to_date, persons } = req.body;

  const newBooking = new Booking({
    hotel_id: hotel_id,
    user_id: user_id,
    from_date: form_date,
    to_date: to_date,
    persons: persons,
  });
  try {
    const save = await newBooking.save();
    res.status(200).json(save);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateBooking = async (req, res) => {
  try {
    const updateBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateBooking);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteBooking = async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been Delete");
  } catch (error) {
    res.status(500).json(error);
  }
};
const getBooking = async (req, res) => {
  try {
    const data = await Booking.findById(req.params.id);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
const getAllBooking = async (req, res) => {
  try {
    const data = await Booking.find();
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Users not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  creatBooking,
  updateBooking,
  getAllBooking,
  getBooking,
  deleteBooking,
};
