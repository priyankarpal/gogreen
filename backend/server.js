const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cokkie = require("cookie-parser");
const app = express();
const router = require("./src/routes/routes");
const { Configuration, OpenAIApi } = require("openai");
const axios = require("axios");
// const router = require("./src/modules/users/user_routes");

dotenv.config();
app.use(cors());
app.use(cokkie());
app.use(express.json());
app.use('/api',router);
require('./src/database/connectDb');

// =======chat======
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
async function runCompletion() {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "How are you today?",
  });
  console.log(completion.data.choices[0].text);
}


app.post("/chat", async (req, res) => {
  const message = req.body.message;
  const apiKey = "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";
  const apiUrl = "https://api.openai.com/v1/chat/completions";

  try {
    const response = await axios.post(
      apiUrl,
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const reply = response.data.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});


app.listen(process.env.PORT, () => {
  console.log(`Server Start At Port ${process.env.PORT}`);
});


