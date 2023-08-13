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

module.exports = sendMessage;
