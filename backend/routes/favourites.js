/**
 * @author by Prerna Jain
 */
const router = require("express").Router();
let FavouritesModel = require("../models/favourites.model");
let Apartment = require("../models/apartment.model");
let result_set = [];

// POST API to add an apartment to favourites
router.route("/add-to-favourites").post((req, res) => {
    FavouritesModel.create({
        email: req.body.email,
        apartment_id: req.body.apartmentId
    }, function (err, data) {
        if (err) {
            res.json({
                code: 105,
                message: "Already added to favourites!"
            });
        } else {
            res.json({
                code: 200,
                message: "Apartment added to favourites list!"
            });
        }
    });
});

//GET API to fetch apartment ids from the favourite table for a particular user
router.route("/get-favourites").post((req, res) => {
    const email = req.body.email;
    FavouritesModel.find(
        {
            email: email
        },
        function (err, data) {
            if (err) {
                res.send({
                    code: 106,
                    message: "Something went wrong. Please try after sometime.",
                    data: [],
                });
            }
            else {
                let apartmentid_set = [];
                for (let i = 0; i < data.length; i++) {
                    apartmentid_set.push(data[i].apartment_id);
                }
                Apartment.find({ _id: { $in: apartmentid_set } }, function (err, aprt_data) {
                    if (err) {
                        return null;
                    } else {
                        res.send({
                            code: 200,
                            data: aprt_data,
                            message: "Favourites for the user",
                        });
                    }
                });
            }
        }
    );

});

//DELETE API to delete an apartment from the favourite list
router.route("/remove").post((req, res) => {
    let apartment_id = req.body.apartment_id;
    let email = req.body.email;
    FavouritesModel.remove(
        {
            email: email,
            apartment_id:apartment_id
        }, function(err, data) {
            if(err) {
                res.json({
                    code: 107,
                    message:"Failed to remove place from Favourites"
                });
            } else {
                res.json({
                    code: 200,
                    message:"Removed the apartment from favourites!"
                });
            }
        }
    ).catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;