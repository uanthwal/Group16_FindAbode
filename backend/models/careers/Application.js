const mongoose = require("mongoose");

const jobApplicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  resume: { type: Buffer, required: true },
  mobile: {
    type: Number,
    required: true,
  },
  coverLetter: {
    type: String,
    required: true,
  },
  currentCity: {
    type: String,
    required: true,
  },
  exp: {
    type: Number,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  ctc: {
    type: Number,
    required: true,
  },
  currentOrganization: {
    type: String,
    required: true,
  },
  jobId: {
    type: String,
    required: true,
  },
});

const Application = mongoose.model("application", jobApplicationSchema);

module.exports = Application;
