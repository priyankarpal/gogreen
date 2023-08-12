const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cokkie = require("cookie-parser");
const app = express();
const router = require("./src/routes/routes");
const { Configuration, OpenAIApi } = require("openai");
const axios = require("axios");
const morgan = require("morgan");
// const router = require("./src/modules/users/user_routes");

dotenv.config();
app.use(cors({ origin: "*", credentials: true }));
app.use(cokkie());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
require("./src/database/connectDb");

// const send = async (req,res)=>{
//  const accountSid = "ACa336400248ef065713709696d8eb1ba9";
//  const authToken = "[AuthToken]";
//  const client = require("twilio")(accountSid, authToken);

//  const msg = await client.messages
//    .create({
//      body: "hey how are u again",
//      from: "+16185906988",
//      to: "+917449585365",
//    })
//    if(msg){
//      res.json(msg.sid);
//    }else{
//     res.json("Not Working")
//    }

// }

async function sendMessage() {
  const accountSid = "ACa336400248ef065713709696d8eb1ba9";
  const authToken = "3ee12b40a38d5a4b5e24f3ba67ff1ca0";
  const client = require("twilio")(accountSid, authToken);
  try {
    const msg = await client.messages.create({
      body: "hey how are u again",
      from: "+16185906988",
      to: "+917449585365",
    });

    return msg.sid;
  } catch (error) {
    console.error("Error sending message:", error);
    return "Not Working";
  }
}

app.get("/send", sendMessage);

app.listen(process.env.PORT, () => {
  console.log(`Server Start At Port ${process.env.PORT}`);
});
