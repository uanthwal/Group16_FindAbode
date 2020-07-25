//Author: Simranbanu Roshansha Diwan (B00833562)

const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  ans: {
    type: String,
    required: true,
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

const Answer = mongoose.model("Answer", answerSchema);

module.exports = Answer;
