const router = require('express').Router();
let Blog = require('../models/blog.model');

router.route('/').get((req, res) => {
    Blog.find({ })
      .then(blog => res.json(blog))
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


module.exports = router;