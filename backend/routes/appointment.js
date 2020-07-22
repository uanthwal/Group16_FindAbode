const router = require("express").Router();
let Appointment = require("../models/appointment.model");

router.route("/").post((req, res) => {
  const email = req.body.email;
  const apartmentId = req.body.apartmentId;
  const date = req.body.date;
  const time = req.body.time;
  const newAppointment = new Appointment({ email, apartmentId, date, time });
  newAppointment
    .save()
    .then(() => res.json("newAppointment added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
