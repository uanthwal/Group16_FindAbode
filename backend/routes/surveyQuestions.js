const router = require("express").Router();
let surveyQuestionModel = require("../models/surveyquestions.model")
let surveyResponseModel = require("../models/surveyresponse.model")

router.route("/response").post((req,res) => {
    surveyResponseModel.create({
        question : req.body.question,
        response : req.body.response
    })
    .then(() => res.json("Response added"))
    .catch((err) => res.status(400).json("Error: " + err));
})

router.route("/question").get((req,res) => {

    surveyQuestionModel.find()
    .then(data => {
        return res.status(200).json(data)
    })
    .catch(err => {
        console.log(err);
    })
})

module.exports = router;