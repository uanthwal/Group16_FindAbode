<<<<<<< HEAD
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
=======
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
>>>>>>> c71de300cf6dceb1e875fdf8001128a4011c2148

const app = express();
const port = process.env.PORT || 5000;

const usersRouter = require(__dirname + "/backend/routes/users.js");
const forumRouter = require(__dirname + "/backend/routes/forum.js");
const apartmentRouter = require(__dirname + "/backend/routes/apartment.js");
const blogRouter = require(__dirname + "/backend/routes/blog.js");
const appointmentRouter = require(__dirname + "/backend/routes/appointment.js");
const contactRouter = require(__dirname + '/backend/routes/contactUs.js');

//Career Routes
const jobDeptRouter = require(__dirname + '/backend/routes/careers/jobdepartments.js');
const jobsRouter = require(__dirname + '/backend/routes/careers/jobs.js');

const uri = process.env.ATLAS_URI;
<<<<<<< HEAD
mongoose.connect(uri, { useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true });
=======
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
});
>>>>>>> c71de300cf6dceb1e875fdf8001128a4011c2148
const connection = mongoose.connection;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
<<<<<<< HEAD
app.use(express.static(__dirname + '/build/'));
app.use('/signup', usersRouter);
app.use('/discussionforum', forumRouter);
app.use('/apartments', apartmentRouter);
app.use('/blog', blogRouter);
app.use('/job', jobDeptRouter);
app.use('/jobdetails', jobsRouter);

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname + '/build/index.html'));
=======
app.use(express.static(__dirname + "/build/"));
app.use("/signup", usersRouter);
app.use("/discussionforum", forumRouter);
app.use("/apartments", apartmentRouter);
app.use("/blog", blogRouter);
app.use("/appointment", appointmentRouter);
app.use('/contact', contactRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
>>>>>>> c71de300cf6dceb1e875fdf8001128a4011c2148
});

//server port
app.listen(port, () => {
<<<<<<< HEAD
	console.log(`Server is runing on port: ${port}`);
=======
  console.log(`Server is runing on port: ${port}`);
>>>>>>> c71de300cf6dceb1e875fdf8001128a4011c2148
});
