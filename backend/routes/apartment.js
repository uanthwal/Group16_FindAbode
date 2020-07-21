const router = require("express").Router();
let Apartment = require("../models/apartment.model");

router.route("/search-apartments").post((req, res) => {
  var search_text = req.body.search_text;
  var resp_data = [];
  cursor = Apartment.find(
    {
      $or: [
        { name: { $regex: ".*" + search_text + ".*", $options: "i" } },
        { description: { $regex: ".*" + search_text + ".*", $options: "i" } },
        { address: { $regex: ".*" + search_text + ".*", $options: "i" } },
      ],
    },
    function (err, data) {
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
          message: resp_data.length + " Result(s) Found",
          data: resp_data,
        });
      }
    }
  );
});

module.exports = router;
