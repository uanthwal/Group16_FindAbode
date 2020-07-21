const mongoose = require("mongoose");

const facilitiesSchema = new mongoose.Schema({
  apartment_id: {
    type: String,
    required: true,
  },
  facility: {
    type: String,
  },
});

const Facility = mongoose.model("Facility", facilitiesSchema);

module.exports = Facility;
