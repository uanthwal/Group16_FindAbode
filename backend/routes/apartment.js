/**
 * @author Parsad Upendra(upendra@dal.ca)
 * BANNER ID: B00838095
 */

const router = require("express").Router();
const Apartment = require("../models/apartment.model");
const MostExploredPlaces = require("../models/mostexploredplaces.model");

// An endpoint to search an apartment by name, description, and address
router.route("/search-apartments").post((req, res) => {
  var search_text = req.body.search_text;
  var resp_data = [];
  // Search is performed on the keyword entered by the user; it looks for case-insensitive presence in name, description, and address
  Apartment.find(
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

// An endpoint to get the list of all the apartments listed on the platform
router.route("/all-apartments").post((req, res) => {
  var resp_data = [];
  Apartment.find({}, function (err, data) {
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
        message: resp_data.length + " Apartment(s) Found",
        data: resp_data,
      });
    }
  });
});

// An endpoint to get the most explored places
router.route("/get-featured").post((req, res) => {
  MostExploredPlaces.aggregate(
    [
      { $group: { _id: "$apartment_id", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ],
    function (err, grpbydata) {
      let apartment_ids = [];
      let len = grpbydata.length < 5 ? grpbydata.length : 4;
      for (let i = 0; i < len; i++) {
        apartment_ids.push(grpbydata[i]._id);
      }
      Apartment.find({ _id: { $in: apartment_ids } }, function (err, data) {
        if (err) {
          return null;
        } else {
          if (null != data) {
            res.send({
              code: 200,
              data: data,
              message: "Most explored places",
            });
          }
        }
      });
    }
  );
});

// An endpoint for adding new apartment to the platform
router.route("/add-apartment").post((req, res) => {
  var apartment_info = req.body.apartment_info;
  const newApartment = new Apartment(apartment_info);
  newApartment
    .save()
    .then(() => {
      res.send({
        code: 200,
        message: "Apartment added successfully!",
        data: {},
      });
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// An endpoint to get an apartment details by id
router.route("/get-apartment-details").post((req, res) => {
  var apartment_id = req.body.apartment_id;
  var reqFrom = req.body.reqFrom;
  var resp_data = {};
  Apartment.find({ _id: apartment_id }, function (err, data) {
    resp_data = data[0];
    if (err) {
      res.send({
        code: 500,
        message: "Something went wrong. Please try after sometime.",
        data: {},
      });
    } else {
      // If the apartment is explored by the users and not the admin; the details are saved in mostexploredplaces schema
      if (reqFrom === "APARTMENT_DETAIL") {
        const newSearch = new MostExploredPlaces({ apartment_id });
        newSearch
          .save()
          .then(() => res.json("Search recorded!"))
          .catch((err) => res.status(400).json("Error: " + err));
      }
      res.send({
        code: 200,
        data: resp_data,
      });
    }
  }).catch((err) => res.status(400).json("Error: " + err));
});

// An endpoint to update an apartment details
router.route("/update-apartment-details").post((req, res) => {
  var apartment_info = req.body.apartment_info;
  var resp_data = {};
  Apartment.update(
    { _id: apartment_info._id },
    { $set: apartment_info },
    function (err, data) {
      resp_data = data[0];
      if (err) {
        res.send({
          code: 500,
          message: "Something went wrong. Please try after sometime.",
          data: {},
        });
      } else {
        res.send({
          code: 200,
          data: resp_data,
          message: "Apartment details saved successfully!",
        });
      }
    }
  );
});

// An endpoint to remove the apartment from the database
router.route("/delete").post((req, res) => {
  var apartment_id = req.body.apartment_id;
  var resp_data = {};
  Apartment.remove({ _id: apartment_id }, function (err, data) {
    resp_data = data[0];
    if (err) {
      res.send({
        code: 500,
        message: "Something went wrong. Please try after sometime.",
        data: {},
      });
    } else {
      MostExploredPlaces.remove({'apartment_id':apartment_id}, function(err, data) {
        console.log(data);
        res.send({
          code: 200,
          data: resp_data,
          message: "Apartment deleted successfully!",
        });
      });
    }
  });
});

module.exports = router;
