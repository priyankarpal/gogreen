const Router = require("express");
const router = Router();
const sendMessage = require("./src/utils/sendMessage");
const axios = require("axios");

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

router.post("/create-payment-link", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.razorpay.com/v1/payment_links",
      {
        amount: req.body.amount, // Amount in paise (e.g., 1000 for INR 10)
        currency: "INR",
        description: "Payment for your order",
        customer: {
          name: "John Doe",
          contact: "9876543210",
          email: "john@example.com",
        },
        notify: {
          sms: true,
          email: true,
        },
      },
      {
        auth: {
          username: process.env.RAZOR_PAY_KEY,
          password: process.env.RAZOR_PAY_SEC,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error creating payment link:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the payment link" });
  }
});

router.post("/checkout", checkout);
router.post("/payment", payment);
router.get("/paymentprocess", (req, res) => {
  res.status(200).json({ key: "rzp_test_8oySKX9rIGczSe" });
});

router.post("/send-message", async (req, res) => {
  try {
    const { phone, message } = req.body;

    const data = await sendMessage({ phone, message });
    return res.json(data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the payment link" });
  }
});

const openaiApiKey = "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";

router.get("/get-nearby-recommendations", async (req, res) => {
  try {
    const { prompt } = req.body; // Assuming your data is sent in a "data" field

    // Construct your request to OpenAI API
    const openaiResponse = await axios.post(
      "https://api.openai.com/v1/engines/davinci-codex/completions",
      {
        prompt: prompt,
        max_tokens: 50, // You can adjust this
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openaiApiKey}`,
        },
      }
    );

    // Extract the response from OpenAI
    const generatedText = openaiResponse.data.choices[0].text;

    // You can do further processing here if needed

    // Send the generated response back
    res.json({ generatedText });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;
