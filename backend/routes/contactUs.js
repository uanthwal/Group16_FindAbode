/**
 * @author by Souvik Das(Souvik.das@dal.ca)
 * BANNER ID: B00847127
 */
const router = require("express").Router();
let ContactUsModel = require("../models/contactUs.model");

// creating routes for contactUs table to query the db
router.route("/").post((req, res) => {
  const f_name = req.body.f_name;
  const l_name = req.body.l_name;
  const email = req.body.email;
  const query = req.body.query;

  const newQuery = new ContactUsModel({ f_name, l_name, email, query });
  newQuery
    .save()
    .then(() => res.json("Query added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
