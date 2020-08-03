const router = require("express").Router();
const Rating = require('../../models/ratings/rating');
const { request } = require("express");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

router.route("/save").post((req, res) => {

    Rating.find({apartment_id: req.body.apartment_id}).then((result) => {
        if (result !== null && result.length > 0) {
            let ratingResult = result[0];
            
            ratingResult['cleanliness'][req.body.cleanliness] = ratingResult['cleanliness'][req.body.cleanliness] + 1;
            ratingResult['communication'][req.body.communication] = ratingResult['communication'][req.body.communication] + 1;
            ratingResult['location'][req.body.location] = ratingResult['location'][req.body.location] + 1;
            ratingResult['accuracy'][req.body.accuracy] = ratingResult['accuracy'][req.body.accuracy] + 1;
            var date = new Date();
            var month = months[date.getUTCMonth()];
            let year = date.getUTCFullYear();
            let ratingComment = { "month" : month, "year" : year, "comment" : req.body.comment}
            if (req.body.comment !== null && req.body.comment !== '') {
                ratingResult['comments'].push(ratingComment);
            }
            Rating.updateOne({apartment_id: req.body.apartment_id}, {
                cleanliness : ratingResult['cleanliness'], 
                location: ratingResult['location'],
                accuracy: ratingResult['accuracy'],
                communication: ratingResult['communication'], 
                comments: ratingResult['comments']
            }).then(result => {
                res.status(200).send("Updated successfully");
                return;
            }).catch(err => {
                res.status(500).send("Error in updating. Kindly try again");
                return;
            })

        }
    }).catch(err => {
        return res.status(500).send("Error occured while saving the feedback. Kindly try again");
    })
});

module.exports = router;