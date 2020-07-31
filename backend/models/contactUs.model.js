/**
 * @author by Souvik Das(Souvik.das@dal.ca)
 * BANNER ID: B00847127
 */
const mongoose = require("mongoose");
//creating contactUs table schema
const contactSchema = new mongoose.Schema({
  f_name: {
    type: String,
    required: true,
    minlength: 1,
  },
  l_name: {
    type: String,
    required: true,
    minlength: 1,
  },
  email: {
    type: String,
    required: true,
    unique: false,
  },
  query: {
    type: String,
    required: true,
    minlength: 10,
  },
});

const ContactUsModel = mongoose.model("ContactUs", contactSchema);

module.exports = ContactUsModel;
