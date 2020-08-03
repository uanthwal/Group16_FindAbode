const router = require("express").Router();
let Appointment = require("../models/appointment.model");
const nodemailer = require("nodemailer");

/**
 * Express API for appointment management
 * @author Ruize Nie
 */
router.route("/delete/:id").delete((req, res) => {
  Appointment.findOneAndDelete(
    { _id: req.params.id },
    { useFindAndModify: false }
  ).catch((err) => res.status(400).json("Error: " + err));
});

router.route("/get-appointments").post((req, res) => {
  const email = req.body.email;
  var resp_data = [];
  Appointment.find(
    {
      email: email,
    },
    function (err, data) {
      resp_data = data;
      if (err) {
        res.send({
          code: 500,
          message: "Something went wrong. Please try after sometime.",
          data: [],
        });
      } else {
        res.send({
          code: 200,
          message: resp_data.length + " Result(s) Found",
          data: resp_data,
        });
      }
    }
  );
});

router.route("/book-appointment").post(async (req, res) => {
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
    tls: {
      rejectUnauthorized: false,
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
    } else {
    }
  });

  newAppointment
    .save()
    .then(() => res.json("newAppointment added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
