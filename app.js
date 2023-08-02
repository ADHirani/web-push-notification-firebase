const express = require("express");
const sendMessage= require("./services/sendMessage")
const cors = require("cors");
const admin = require("firebase-admin")
require("dotenv").config();
const app = express();

app.use(cors({
  origin: "*"
}))
app.use(express.json())


// File path for secret key
// generates from:  project setting => service accounts => generate new Private Key 
const serviceAccount = require("./check-push-notification-firebase-adminsdk-3dwqu-19e45ec9f0.json");
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
app.post("/push", async (req, res) => {
  try {
    
    if (!req?.body?.token) {
      return res.status(401).json({
        status: false,
        message: "unauthorized !"
      })
    }

    const response = await sendMessage(req?.body?.token, req?.body?.title, req?.body?.message)

    console.log('response', response)
    res.status(200).json({
      status: true,
      message: "Message has been sent!",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error?.message || error
    })
  }
})


app.listen(process.env.PORT, () => {
  console.log("sever is running . . .");
  console.log("PORT", process.env.PORT);
});
