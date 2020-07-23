const router = require('express').Router();
let Jobs = require('../../models/careers/Job');

router.route('/job').get((req, res) => {
	let deptId = req.param('deptId');

	console.log(Jobs.find({ deptId: deptId }));
	Jobs.find({ deptId: deptId })
		.then((jobs) => res.status(200).json(jobs))
		.catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
