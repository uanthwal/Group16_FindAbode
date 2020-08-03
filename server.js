require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

const usersRouter = require(__dirname + "/backend/routes/users.js");
const forumRouter = require(__dirname + "/backend/routes/forum.js");
const apartmentRouter = require(__dirname + "/backend/routes/apartment.js");
const blogRouter = require(__dirname + "/backend/routes/blog.js");
const appointmentRouter = require(__dirname + "/backend/routes/appointment.js");
const contactRouter = require(__dirname + "/backend/routes/contactUs.js");
const faqsRouter = require(__dirname + "/backend/routes/faq.js");
const surveyQuestionRouter = require(__dirname +
  "/backend/routes/surveyQuestions.js");
const surveyAnswerRouter = require(__dirname +
  "/backend/routes/surveyQuestions.js");
  const favouritesRouter = require(__dirname + '/backend/routes/favourites.js');

//Career Routes
const jobDeptRouter = require(__dirname +
  "/backend/routes/careers/jobdepartments.js");
const jobsRouter = require(__dirname + "/backend/routes/careers/jobs.js");

const ratingRouter = require(__dirname + "/backend/routes/ratings/rating.js");

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
});
const connection = mongoose.connection;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + "/build/"));
app.use("/user", usersRouter);
app.use("/discussionforum", forumRouter);
app.use("/apartments", apartmentRouter);
app.use("/blog", blogRouter);
app.use("/appointment", appointmentRouter);
app.use("/contact", contactRouter);
app.use("/job", jobDeptRouter);
app.use("/jobdetails", jobsRouter);
app.use("/faq", faqsRouter);
app.use("/surveyQuestions", surveyQuestionRouter);
app.use("/surveyAnswers", surveyAnswerRouter);
app.use("/rating", ratingRouter);
app.use('/favourites', favouritesRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

//server port
app.listen(port, () => {
  console.log(`Server is runing on port: ${port}`);
});
