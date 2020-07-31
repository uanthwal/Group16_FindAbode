/**
 * @author by Prerna Jain
 */
const mongoose = require("mongoose");
// creating the schema for the survey responses
const surveyAnswerSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  response: {
    type: String,
    required: true,
  },
});

const surveyAnswerModel = mongoose.model("Surveyresponse", surveyAnswerSchema);
module.exports = surveyAnswerModel;
