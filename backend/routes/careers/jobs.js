const router = require('express').Router();
let multer = require('multer');
let cors = require('cors');
let Jobs = require('../../models/careers/Job');
let Application = require('../../models/careers/Application');

router.route('/job').get((req, res) => {
	let deptId = req.param('deptId');

	console.log(Jobs.find({ deptId: deptId }));
	Jobs.find({ deptId: deptId })
		.then((jobs) => res.status(200).json(jobs))
		.catch((err) => res.status(400).json('Error: ' + err));
});

// var storage = multer.diskStorage({
// 	destination: '../',
// 	filename: function(req, file, cb) {
// 		cb(null, Date.now() + '-' + file.originalname);
// 	}
// });
var storage = multer.memoryStorage();

var upload = multer({ storage: storage }).single('file');

router.route('/apply').post(async (req, res) => {
	console.log('Candiate application received');
	let resumeBuffer = null;
	await upload(req, res, function(err) {
		if (err instanceof multer.MulterError) {
			console.log('Erro occured due to ' + err);
		} else if (err) {
			console.log('Erro occured due to ' + err);
		}
		let { name, email, mobile, coverLetter, currentCity, experience, college, ctc, organization, jobId } = req.body;
		resumeBuffer = req.file.buffer;
		console.log(req.file.buffer);
		console.log(req.body);
		console.log(name);
		const application = new Application({
			name: name,
			email: email,
			mobile: mobile,
			coverLetter: coverLetter,
			currentCity: currentCity,
			exp: experience,
			college: college,
			ctc: ctc,
			currentOrganization: organization,
			resume: resumeBuffer,
			jobId: jobId
		});
		application
			.save()
			.then(() => {
				console.log('Application saved');
				return res.json('Application saved successfully');
			})
			.catch((err) => {
				return res.status(400).json('Error: ' + err);
			});
	});

	// const application = new Application({
	// 	name: name,
	// 	email: email,
	// 	mobile: mobile,
	// 	coverLetter: coverLetter,
	// 	currentCity: currentCity,
	// 	exp: experience,
	// 	college: college,
	// 	ctc: ctc,
	// 	currentOrganization: organization
	// });
	// application
	// 	.save()
	// 	.then(() => {
	// 		console.log('Application saved');
	// 		res.json('Application saved successfully');
	// 	})
	// 	.catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
