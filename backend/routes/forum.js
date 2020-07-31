//Author: Simranbanu Roshansha Diwan (B00833562)

const router = require("express").Router();
let Question = require("../models/questionforum.model");
let Answer = require("../models/answer.model");

//getting an ongoing discussion on specific topic
router.route("/discussionforum/:topic").get((req, res) => {
  Answer.find({ topic: req.params.topic })
    .then((answer) => res.json(answer))
    .catch((err) => res.status(400).json("Error: " + err));
});

//getting all the available topics
router.route("/").get((req, res) => {
  Question.find({})
    .then((question) => res.json(question))
    .catch((err) => res.status(400).json("Error: " + err));
});

//adding a new topic to the database
router.route("/addtopic").post((req, res) => {
  topic = req.body.topic;
  email = req.body.email;
  user = req.body.user;
  const newQuestion = new Question({ topic, email, user });
  newQuestion
    .save()
    .then(() => res.json("Topic added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//getting an ongoing discussion on specific topic
router.route("/:topic").get((req, res) => {
  Answer.find({ topic: req.params.topic })
    .then((answer) => res.json(answer))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Adding a new comment belonging to specific topic
router.route("/:topic/addans").post((req, res) => {
  topic = req.params.topic;
  ans = req.body.ans;
  email = req.body.email;
  user = req.body.user;
  const newAnswer = new Answer({ topic, ans, email, user });
  newAnswer
    .save()
    .then(() => res.json("Answer added!"))
    .catch((err) => res.status(400).json("Error special: " + err));
});

module.exports = router;
