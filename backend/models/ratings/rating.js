const mongoose = require('mongoose');
const ratingSchema = new mongoose.Schema({
	apartment_id: {
		type: String,
		required: true
	},
	cleanliness: {
		type: Object,
		required: true
	},
	communication: {
		type: Object,
		required: true
	},
	accuracy: {
		type: Object,
		required: true
	},
	location: {
		type: Object,
		required: true
	},
	comments: {
		type: Array,
		required: true
	}
});

const Rating = mongoose.model('ratings', ratingSchema);

module.exports = Rating;
