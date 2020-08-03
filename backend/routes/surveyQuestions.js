/**
 * @author by Prerna Jain
 */
const router = require("express").Router();
let surveyQuestionModel = require("../models/surveyquestions.model");
let surveyResponseModel = require("../models/surveyresponse.model");

// POST API to save the survey response provided by the user
router.route("/response").post((req, res) => {
  surveyResponseModel
    .create({
      question: req.body.question,
      response: req.body.response,
    })
    .then(() => res.json("Response added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// GET API to get the survey questions from the database
router.route("/question").get((req, res) => {
  surveyQuestionModel
    .find()
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((err) => {
    });
});

module.exports = router;
