const router = require('express').Router();
const multer = require('multer');
const nodemailer = require('nodemailer');
let Jobs = require('../../models/careers/Job');
let Application = require('../../models/careers/Application');
const e = require('cors');

router.route('/job').get((req, res) => {
	let deptId = req.param('deptId');

	console.log(Jobs.find({ deptId: deptId }));
	Jobs.find({ deptId: deptId })
		.then((jobs) => res.status(200).json(jobs))
		.catch((err) => res.status(400).json('Error: ' + err));
});

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
				sendEmail(email, jobId);
				return res.json('Application saved successfully');
			})
			.catch((err) => {
				return res.status(400).json('Error: ' + err);
			});
	});
});

sendEmail = (userEmail, jobId) => {
	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'findabodecareers@gmail.com',
			pass: 'findabode@16'
		}
	});
	let mailOptions = {
		from: 'findabodecareers@gmail.com',
		to: userEmail,
		subject: 'FindAbode Talent Acquisition',

		html:
			'<p>Hello,<p>' +
			'<p>Thank you very much for the opportunity to consider you as a candidate for the Job id ' +
			jobId +
			'</p>' +
			'<p>The time and effort you took to apply in order to express interest in this opportunity is very much appreciated. We will review your experience and qualifications. If your profile matches our current needs a member of the recruiting team will contact you.</p>' +
			'<p>Sincerely,</p>' +
			'<p>FindAbode Recruiting Team</p>'
	};

	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			console.log(error);
			return false;
		} else {
			console.log('Email sent: ' + info.response);
			return true;
		}
	});
};
module.exports = router;
