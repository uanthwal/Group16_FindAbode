const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  deptId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Department = mongoose.model("departments", departmentSchema);

module.exports = Department;
