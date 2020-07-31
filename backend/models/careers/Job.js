const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  jobId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  deptId: {
    type: Number,
    required: true,
  },
});

const Jobs = mongoose.model("Jobs", jobSchema);

module.exports = Jobs;
