/**
 * @author Parsad Upendra(upendra@dal.ca)
 * BANNER ID: B00838095
 */

const router = require('express').Router();
const Apartment = require('../models/apartment.model');
const MostExploredPlaces = require('../models/mostexploredplaces.model');
const Rating = require('../models/ratings/rating');
const { response } = require('express');

// An endpoint to search an apartment by name, description, and address
router.route('/search-apartments').post((req, res) => {
	var search_text = req.body.search_text;
	var resp_data = [];
	// Search is performed on the keyword entered by the user; it looks for case-insensitive presence in name, description, and address
	Apartment.find(
		{
			$or: [
				{ name: { $regex: '.*' + search_text + '.*', $options: 'i' } },
				{ description: { $regex: '.*' + search_text + '.*', $options: 'i' } },
				{ address: { $regex: '.*' + search_text + '.*', $options: 'i' } }
			]
		},
		function(err, data) {
			resp_data = data;
			if (err) {
				res.send({
					code: 500,
					message: 'Something went wrong. Please try after sometime.',
					data: []
				});
			} else {
				res.send({
					code: 200,
					message: resp_data.length + ' Result(s) Found',
					data: resp_data
				});
			}
		}
	);
});

// An endpoint to get the list of all the apartments listed on the platform
router.route('/all-apartments').post((req, res) => {
	var resp_data = [];
	Apartment.find({}, function(err, data) {
		resp_data = data;
		if (err) {
			res.send({
				code: 500,
				message: 'Something went wrong. Please try after sometime.',
				data: []
			});
		} else {
			res.send({
				code: 200,
				message: resp_data.length + ' Apartment(s) Found',
				data: resp_data
			});
		}
	});
});

// An endpoint to get the most explored places
router.route('/get-featured').post((req, res) => {
	MostExploredPlaces.aggregate(
		[ { $group: { _id: '$apartment_id', count: { $sum: 1 } } }, { $sort: { count: -1 } } ],
		function(err, grpbydata) {
			let apartment_ids = [];
			let len = grpbydata.length < 5 ? grpbydata.length : 4;
			for (let i = 0; i < len; i++) {
				apartment_ids.push(grpbydata[i]._id);
			}
			Apartment.find({ _id: { $in: apartment_ids } }, function(err, data) {
				if (err) {
					return null;
				} else {
					if (null != data) {
						res.send({
							code: 200,
							data: data,
							message: 'Most explored places'
						});
					}
				}
			});
		}
	);
});

// An endpoint for adding new apartment to the platform
router.route('/add-apartment').post((req, res) => {
	var apartment_info = req.body.apartment_info;
	const newApartment = new Apartment(apartment_info);
	newApartment
		.save()
		.then(() => {
			res.send({
				code: 200,
				message: 'Apartment added successfully!',
				data: {}
			});
		})
		.catch((err) => res.status(400).json('Error: ' + err));
});

// An endpoint to get an apartment details by id
router.route('/get-apartment-details').post((req, res) => {
	var apartment_id = req.body.apartment_id;
	var reqFrom = req.body.reqFrom;
	var resp_data = {};
	Apartment.find({ _id: apartment_id }, function(err, data) {
		resp_data = data[0];
		if (err) {
			res.send({
				code: 500,
				message: 'Something went wrong. Please try after sometime.',
				data: {}
			});
		} else {
			// If the apartment is explored by the users and not the admin; the details are saved in mostexploredplaces schema
			if (reqFrom === 'APARTMENT_DETAIL') {
				const newSearch = new MostExploredPlaces({ apartment_id });
				newSearch
					.save()
					.catch((err) => res.status(400).json('Error: ' + err));
			}
			Rating.find({ apartment_id: apartment_id })
				.then((result) => {
					if (result !== null && result !== '') {
						let rating_result = result[0];
						let cleanliness = rating_result['cleanliness'];
						let cleanlinessRating =
							(1 * cleanliness['1'] +
								2 * cleanliness['2'] +
								3 * cleanliness['3'] +
								4 * cleanliness['4'] +
								5 * cleanliness['5']) /
							(cleanliness['1'] +
								cleanliness['2'] +
								cleanliness['3'] +
								cleanliness['4'] +
								cleanliness['5']);
						cleanlinessRating = parseInt(cleanlinessRating * 100) / 100;
						let communication = rating_result['communication'];
						let communicationRating =
							(1 * communication['1'] +
								2 * communication['2'] +
								3 * communication['3'] +
								4 * communication['4'] +
								5 * communication['5']) /
							(communication['1'] +
								communication['2'] +
								communication['3'] +
								communication['4'] +
								communication['5']);
						communicationRating = parseInt(communicationRating * 100) / 100;
						let accuracy = rating_result['accuracy'];
						let accuracyRating =
							(1 * accuracy['1'] +
								2 * accuracy['2'] +
								3 * accuracy['3'] +
								4 * accuracy['4'] +
								5 * accuracy['5']) /
							(accuracy['1'] + accuracy['2'] + accuracy['3'] + accuracy['4'] + accuracy['5']);
						accuracyRating = parseInt(accuracyRating * 100) / 100;
						let location = rating_result['location'];
						let locationRating =
							(1 * location['1'] +
								2 * location['2'] +
								3 * location['3'] +
								4 * location['4'] +
								5 * location['5']) /
							(location['1'] + location['2'] + location['3'] + location['4'] + location['5']);
						locationRating = parseInt(locationRating * 100) / 100;
						let comments = rating_result['comments'];
						resp_data.comments = JSON.stringify(comments);
						let rating_data = {};

						rating_data.location = locationRating;
						rating_data.comments = comments;
						rating_data.accuracy = accuracyRating;
						rating_data.cleanliness = cleanlinessRating;
						rating_data.communication = communicationRating;
						res.send({
							code: 200,
							data: resp_data,
							rating: rating_data
						});
						return;
					}
					res.send({
						code: 200,
						data: resp_data
					});
				})
				.catch((err) => {
					res.send({
						code: 200,
						data: resp_data
					});
				});
		}
	}).catch((err) => res.status(400).json('Error: ' + err));
});

// An endpoint to update an apartment details
router.route('/update-apartment-details').post((req, res) => {
	var apartment_info = req.body.apartment_info;
	var resp_data = {};
	Apartment.update({ _id: apartment_info._id }, { $set: apartment_info }, function(err, data) {
		resp_data = data[0];
		if (err) {
			res.send({
				code: 500,
				message: 'Something went wrong. Please try after sometime.',
				data: {}
			});
		} else {
			res.send({
				code: 200,
				data: resp_data,
				message: 'Apartment details saved successfully!'
			});
		}
	});
});

// An endpoint to remove the apartment from the database

router.route('/delete').post((req, res) => {
	var apartment_id = req.body.apartment_id;
	var resp_data = {};
	Apartment.remove({ _id: apartment_id }, function(err, data) {
		resp_data = data[0];
		if (err) {
			res.send({
				code: 500,
				message: 'Something went wrong. Please try after sometime.',
				data: {}
			});
		} else {
			MostExploredPlaces.remove({ apartment_id: apartment_id }, function(err, data) {
				res.send({
					code: 200,
					data: resp_data,
					message: 'Apartment deleted successfully!'
				});
			});
		}
	});
});

module.exports = router;
