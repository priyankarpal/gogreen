const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cokkie = require("cookie-parser");
const app = express();
const router = require("./src/routes/routes");
const { Configuration, OpenAIApi } = require("openai");
const axios = require("axios");
const morgan = require("morgan");
const sendMessage = require("./src/utils/sendMessage");

dotenv.config();
app.use(cors({ origin: "*", credentials: true }));
app.use(cokkie());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
require("./src/database/connectDb");

app.listen(process.env.PORT, () => {
  console.log(`Server Start At Port ${process.env.PORT}`);
});
