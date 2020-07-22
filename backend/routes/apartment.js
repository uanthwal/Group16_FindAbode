const router = require("express").Router();
let Apartment = require("../models/apartment.model");

router.route("/search-apartments").post((req, res) => {
    var search_text = req.body.search_text;
    var resp_data = [];
    cursor = Apartment.find(
        {
            $or: [
                {name: {$regex: ".*" + search_text + ".*", $options: "i"}},
                {description: {$regex: ".*" + search_text + ".*", $options: "i"}},
                {address: {$regex: ".*" + search_text + ".*", $options: "i"}},
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

router.route("/get-featured").post((req, res) => {
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


// Adding new method to add details of property
router.route("/get-apartment-details").post((req, res) => {
    let apartment_id = req.body.place_id;
    let resp_data = {};
    Apartment.find(
        {
            "_id": apartment_id
        },
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
                });
            }
        }
    );
});

module.exports = router;
