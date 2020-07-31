const mongoose = require("mongoose");

const mostExploredPlacesSchema = new mongoose.Schema({
  apartment_id: {
    type: String,
  },
});

const MostExploredPlaces = mongoose.model(
  "mostexploredplaces",
  mostExploredPlacesSchema
);

module.exports = MostExploredPlaces;
