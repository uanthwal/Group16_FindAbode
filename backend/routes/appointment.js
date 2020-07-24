const router = require("express").Router();
let Appointment = require("../models/appointment.model");
const nodemailer = require("nodemailer");

router.route("/").post(async (req, res) => {
  const email = req.body.email;
  const apartmentId = req.body.apartmentId;
  const date = req.body.date;
  const time = req.body.time;
  const newAppointment = new Appointment({ email, apartmentId, date, time });

  const output = `
    <p>You have a new appointment</p>
    <h3>Details</h3>
    <ul>  
    <li>You booked appointment successfully, please check your appointment page for more detail</li>
      <li>Email: ${email}</li>
      <li>Date: ${date}</li>
      <li>Time: ${time}</li>
    </ul>
  `;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "5308sdc@gmail.com",
      pass: "sdc.group21",
    },
  });

  const mailOptions = {
    from: "support@findabode.com",
    to: email,
    subject: "Appointment Booked Successful",
    html: output,
  };

  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  newAppointment
    .save()
    .then(() => res.json("newAppointment added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
