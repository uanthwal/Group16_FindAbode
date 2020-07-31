/**
 * @author by Souvik Das(Souvik.das@dal.ca)
 * BANNER ID: B00847127
 */
const mongoose = require("mongoose");

//Creating FQA Schema
const faqSchema = new mongoose.Schema({
  key: {
    type: Number,
    required: true,
  },
  open: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const faqModel = mongoose.model("faqs", faqSchema);

module.exports = faqModel;
