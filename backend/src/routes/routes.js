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
  updateUser,
  deleteUsers,
  getUsers,
  getAllUsers,
  getUserId,
} = require("../modules/users/user_controller");

const {
  creatBooking,
  updateBooking,
  deleteBooking,
  getBooking,
  getAllBooking,
} = require("../modules/booking/booking_controller");

const { checkout, payment } = require("../modules/payments/payment_controller");

router.post("/hotels", creatHotels);
router.get("/hotels", getAllHotels);
router.get("/hotels/:id", getHotels);
router.patch("/hotels/:id", updateHotels);
router.delete("/hotels/:id", deleteHotels);

router.post("/users", creatUsers);
router.get("/users", getAllUsers);
router.get("/users/:id", getUsers);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUsers);

router.post("/users/getUserId", getUserId);

router.post("/bookings", creatBooking);
router.get("/bookings", getAllBooking);
router.get("/bookings/:id", getBooking);
router.patch("/bookings/:id", updateBooking);
router.delete("/bookings/:id", deleteBooking);

router.post("/checkout", checkout);
router.post("/payment", payment);
router.get("/paymentprocess", (req, res) => {
  res.status(200).json({ key: "rzp_test_8oySKX9rIGczSe" });
});

module.exports = router;
