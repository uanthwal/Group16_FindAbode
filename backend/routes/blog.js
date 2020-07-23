const router = require('express').Router();
let Blog = require('../models/blog.model');

router.route('/').get((req, res) => {
    Blog.find({ })
      .then(blog => {
        console.log(blog);
        res.json(blog);
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/addblog').post((req, res) => {
    topic=req.body.topic;
    p1=req.body.p1;
    p2=req.body.p2;
    const newBlog = new Blog({ topic,p1, p2});
    newBlog.save()
    .then(() => res.json('Blog Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/oneblog/:topic').get((req, res) => {
    Blog.find({topic:req.params.topic  })
      .then(blog => res.json(blog))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/modifyblog').post((req,res)=>{
  Blog.findOneAndUpdate(
    { topic: req.body.topic },
    {
      p1: req.body.p1,
      p2: req.body.p2,
    },
    { useFindAndModify: false }
  ).catch((err) => res.status(400).json("Error: " + err));
})

router.route("/deleteblog").post((req, res) => {
  console.log(req.body.topic)
  Blog.findOneAndDelete(
    { topic: req.body.topic },
    { useFindAndModify: false }
  ).catch((err) => res.status(400).json("Error: " + err));
});


module.exports = router;