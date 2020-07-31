/**
 * @author by Prerna Jain
 */
const mongoose = require("mongoose");
//creating the schema for the survey questions
const surveyQuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  choice1: {
    type: String,
    required: true,
  },
  choice2: {
    type: String,
    required: true,
  },
  choice3: {
    type: String,
    required: true,
  },
});

const surveyQuestionModel = mongoose.model(
  "Surveyquestion",
  surveyQuestionSchema
);
module.exports = surveyQuestionModel;
