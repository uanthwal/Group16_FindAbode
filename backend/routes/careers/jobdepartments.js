const router = require("express").Router();
let Department = require("../../models/careers/Deparments");

router.route("/departments").get((req, res) => {
  Department.find({})
    .then((departments) => res.status(200).json(departments))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
