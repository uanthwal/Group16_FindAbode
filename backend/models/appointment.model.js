const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  apartmentId: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
