const Router = require("express");
const router = Router();
const { verifyAdmin, verifyUser } = require("../middlewears/middlewear");
const {
  creatHotels,
  getAllHotels,
  getHotels,
  updateHotels,
  deleteHotels,
} = require("../modules/hotels/hotel_conroller");

const {
  creatUsers,
  updateUsers,
  deleteUsers,
  getUsers,
  getAllUsers,
} = require("../modules/users/user_controller");

const {
  creatBooking,
  updateBooking,
  deleteBooking,
  getBooking,
  getAllBooking,
} = require("../modules/booking/booking_controller");
const Booking = require("../modules/booking/booking_model");

router.post("/hotels", creatHotels);
router.get("/hotels", getAllHotels);
router.get("/hotels/:id", getHotels);
router.patch("/hotels/:id", updateHotels);
router.delete("/hotels/:id", deleteHotels);

router.post("/users", creatUsers);
router.get("/users", getAllUsers);
router.get("/users/:id", getUsers);
router.patch("/users/:id", updateUsers);
router.delete("/users/:id", deleteUsers);

router.post("/bookings", creatBooking);
router.get("/bookings", getAllBooking);
router.get("/bookings/:id", getBooking);
router.patch("/bookings/:id", updateBooking);
router.delete("/bookings/:id", deleteBooking);

module.exports = router;
