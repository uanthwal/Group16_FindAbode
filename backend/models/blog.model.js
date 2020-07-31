//Author: Simranbanu Roshansha Diwan (B00833562)

const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  p1: {
    type: String,
    required: true,
  },
  p2: {
    type: String,
    required: true,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
