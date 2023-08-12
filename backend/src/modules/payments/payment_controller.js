const Razorpay = require("razorpay");
const crypto = require("crypto");
const Payment = require("./payment_model");

const instance = new Razorpay({
  key_id: "rzp_test_8oySKX9rIGczSe",
  key_secret: 'NIS5Vjt76v707Rkvr2w8MMhQ',
});

const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100), 
    currency: "INR",
  };
  const order = await instance.orders.create(options);

  res.send(order);
};

const payment = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", "NIS5Vjt76v707Rkvr2w8MMhQ")
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });
    console.log("Payment Done");
    res.status(200).json(isAuthentic);

    // res.redirect(
    //   `http://localhost:3000/paymentSuccess?reference=${razorpay_payment_id}`
    // );
  } else {
    res.status(400).json({
      success: false,
    });
  }
};
module.exports = { checkout, payment };
