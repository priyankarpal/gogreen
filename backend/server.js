const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cokkie = require("cookie-parser");
const app = express();
const router = require("./src/routes/routes");
const { Configuration, OpenAIApi } = require("openai");
const axios = require("axios");
const morgan = require("morgan");

dotenv.config();
app.use(cors({ origin: "*", credentials: true }));
app.use(cokkie());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
require("./src/database/connectDb");
const openaiApiKey = "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";

async function sendMessage({ phone, message }) {
  const accountSid = "ACa336400248ef065713709696d8eb1ba9";
  const authToken = "3ee12b40a38d5a4b5e24f3ba67ff1ca0";
  const client = require("twilio")(accountSid, authToken);
  try {
    const msg = await client.messages.create({
      body: message,
      from: "+16185906988",
      to: `+91${phone}`,
    });

    return msg.sid;
  } catch (error) {
    console.error("Error sending message:", error);
    return "Not Working";
  }
}
app.post("/get-nearby-recommendations", async (req, res) => {
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

app.get("/send", sendMessage);

app.listen(process.env.PORT, () => {
  console.log(`Server Start At Port ${process.env.PORT}`);
});
