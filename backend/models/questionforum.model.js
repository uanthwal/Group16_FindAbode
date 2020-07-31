//Author: Simranbanu Roshansha Diwan (B00833562)

const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
});

const Questionforum = mongoose.model("Questionforum", questionSchema);

module.exports = Questionforum;
