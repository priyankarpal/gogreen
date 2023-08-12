const Hotel = require("./hotel_model");


const creatHotels = async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const saveHotel = await newHotel.save();
    res.status(200).json(saveHotel);
  } catch (error) {
    res.status(500).json(error);
  }
};
const updateHotels = async (req, res) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateHotel);
  } catch (error) {
    res.status(500).json(error);
  }
};
const deleteHotels = async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been Delete");
  } catch (error) {
    res.status(500).json(error);
  }
};
const getHotels = async (req, res) => {
  try {
    const data = await Hotel.findById(req.params.id);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Hotel not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
const getAllHotels = async (req, res) => {
  try {
    const data = await Hotel.find();
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Hotels not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};


module.exports = {
  creatHotels,
  updateHotels,
  deleteHotels,
  getHotels,
  getAllHotels,
};
