const nodemailer = require("nodemailer");
const express = require("express");
const { google } = require("googleapis");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  })
);
const mailer = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    clientId: process.env.EMAILER_CLIENT_ID,
    clientSecret: process.env.EMAILER_CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  },
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/saveQuery", async (req, res) => {
  console.log(req.body);
  var body =
    "A new query was posted via official adVITya website, here are more details about it :\n";
  body += "Firstname : " + req.body.firstname + "\n";
  body += "Lastname : " + req.body.lastname + "\n";
  body += "Email : " + req.body.email + "\n";
  body += "Phone Number : " + req.body.phoneNumber + "\n";
  body += "Message : " + req.body.message + "\n";
  let mail = {
    to: process.env.CONTACT_MAIL,
    from: `adVITya-Site ${process.env.EMAIL}`,
    subject: "New Query | adVITya - 2025",
    text: body,
  };

  mailer
    .sendMail(mail)
    .then((info) => res.sendStatus(200))
    .catch((error) => res.sendStatus(500));
});

app.listen(6969, () => {
  console.log("Mailer Active");
});
