/**
 * @author by Souvik Das(Souvik.das@dal.ca)
 * BANNER ID: B00847127
 */
const router = require("express").Router();
let faqModel = require("../models/faq.model");

// creating routes for faqs table to query the db.
router.route("/get-faq-list").get((req, res) => {
  let resp_data = [];
  faqModel.find({}, function (err, data) {
    resp_data = data;
    if (err) {
      res.send({
        code: 500,
        message: "Something went wrong. Please try after sometime.",
        data: [],
      });
    } else {
      res.send({
        code: 200,
        message: resp_data.length + " FAQ(s) Found",
        data: resp_data,
      });
    }
  });
});

module.exports = router;
