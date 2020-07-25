const mongoose = require("mongoose");
const surveyAnswerSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    response: {
        type: String,
        required: true
    }
});

const surveyAnswerModel = mongoose.model("Surveyresponse", surveyAnswerSchema);
module.exports = surveyAnswerModel;