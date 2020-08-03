/**
 * @author by Prerna Jain
 */
const mongoose = require("mongoose");

//creating the schema for favourites
const favouriteSchema = new mongoose.Schema({
    email:{
    type: String,
    required: true,
    unique: false,
    },
    apartment_id:{
        type: String,
        required: true,
        unique: false,
    }
});

const favourites = mongoose.model("Favourite", favouriteSchema);

module.exports = favourites;