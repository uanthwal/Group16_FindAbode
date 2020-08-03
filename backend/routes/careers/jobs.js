const router = require("express").Router();
const multer = require("multer");
const nodemailer = require("nodemailer");
let Jobs = require("../../models/careers/Job");
let Application = require("../../models/careers/Application");
let Department = require("../../models/careers/Deparments");
const e = require("cors");

router.route("/job").get((req, res) => {
  let deptId = req.param("deptId");

  Jobs.find({ deptId: deptId })
    .then((jobs) => res.status(200).json(jobs))
    .catch((err) => res.status(400).json("Error: " + err));
});

var storage = multer.memoryStorage();

var upload = multer({ storage: storage }).single("file");

checkIfEmailExist = async (email, jobId) => {
  Application.find({ email: email, jobId: jobId })
    .then((result) => {
      if (result.length > 1) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      return false;
    });
};
router.route("/apply").post(async (req, res) => {
  let resumeBuffer = null;
  await upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
    } else if (err) {
    }
    let {
      name,
      email,
      mobile,
      coverLetter,
      currentCity,
      experience,
      college,
      ctc,
      organization,
      jobId,
    } = req.body;
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
      jobId: jobId,
    });
    try {
      application.save().then((result) => {
        let id = result.get("_id");
        Application.find({ email: email, jobId: jobId })
          .then((result) => {
            if (result.length > 1) {
              Application.deleteOne({ _id: id })
                .then((deleteResult) => {
                  return res
                    .status(202)
                    .send("User has already applied for this job");
                })
                .catch((err) => {
                  return res
                    .status(202)
                    .send("User has already applied for this job");
                });
            } else {
              sendEmail(email, jobId, name);
              return res
                .status(200)
                .send(
                  "Your application is successfull submitted. Kindly check your email"
                );
            }
          })
          .catch((err) => {
            return res.send("Error occured");
          });
      });
    } catch (err) {
    }
  });
});

router.route("/add").post(async (req, res) => {
  Jobs.find({ jobId: req.body.jobId })
    .then((result) => {
      if (result !== null && result.length > 0) {
        return res.status(202).send("JobId already present");
      } else {
        Department.find({ deptId: req.body.deptId }).then((departments) => {
          if (departments != null && departments.length > 0) {
            const job = new Jobs({
              deptId: req.body.deptId,
              title: req.body.title,
              desc: req.body.desc,
              jobId: req.body.jobId,
            });
            job.save().then((result) => {
              return res.status(200).send("New job added to database");
            });
          } else {
            return res.status(202).send("Kindly check the department id");
          }
        });
      }
    })
    .catch((err) => {
      return false;
    });
});

sendEmail = (userEmail, jobId, name) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "findabodecareers@gmail.com",
      pass: "findabode@16",
    },
  });
  let mailOptions = {
    from: "findabodecareers@gmail.com",
    to: userEmail,
    subject: "FindAbode Talent Acquisition",

    html:
      "<p>Hello " +
      name +
      ",<p>" +
      "<p>Thank you very much for the opportunity to consider you as a candidate for the Job id " +
      jobId +
      "</p>" +
      "<p>The time and effort you took to apply in order to express interest in this opportunity is very much appreciated. We will review your experience and qualifications. If your profile matches our current needs a member of the recruiting team will contact you.</p>" +
      "<p>Sincerely,</p>" +
      "<p>FindAbode Recruiting Team</p>",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return false;
    } else {
      return true;
    }
  });
};
module.exports = router;
