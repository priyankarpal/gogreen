const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cokkie = require("cookie-parser");
const app = express();
const router = require("./src/modules/hotels/hotel_routes");

dotenv.config();
app.use(cors());
app.use(cokkie());
app.use(express.json());
app.use('/api',router);
require('./src/database/connectDb');


app.listen(process.env.PORT, () => {
  console.log(`Server Start At Port ${process.env.PORT}`);
});
