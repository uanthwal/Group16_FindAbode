const router = require("express").Router();
let User = require("../models/user.model");
var crypto = require("crypto");
var algorithm = "aes256";

/**
 * Express API for user profile management
 * @author Ruize Nie, Parsad Upendra
 */
router.route("/login").post((req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  User.findOne({ email: email }, function (err, email_data) {
    if (null == email_data) {
      res.json({
        code: 102,
        message: "No user found!",
        data: null,
      });
    } else {
      User.findOne(
        { email: email, password: get_encrypted_value(password) },
        function (err, data) {
          if (null != data) {
            res.json({
              code: 200,
              message: "User login successful!",
              data: {
                email: data.email,
                userType: data.userType,
                username: data.username,
              },
            });
          } else {
            res.json({
              code: 103,
              message: "Invalid credentials",
              data: null,
            });
          }
        }
      ).catch((err) => res.status(400).json("Error: " + err));
    }
  }).catch((err) => res.status(400).json("Error: " + err));
});

router.route("/signup").post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = get_encrypted_value(req.body.password);
  const userType = "R";
  User.findOne({ email: email }, function (err, data) {
    if (null != data && data.email == email) {
      res.json({
        code: 101,
        message: "User already registered with this email address",
      });
    } else {
      const newUser = new User({ username, email, password, userType });
      newUser
        .save()
        .then(() => {
          res.json({
            code: 200,
            message:
              "User registration was successful! Redirecting user to the home page",
          });
        })
        .catch((err) => res.status(400).json("Error: " + err));
    }
  }).catch((err) => res.status(400).json("Error: " + err));
});

router.route("/info").post((req, res) => {
  let email = req.body.email;
  User.findOne({ email: email }, function (err, data) {
    if (null == data) {
      res.json({
        code: 104,
        message: "No user found!",
        data: null,
      });
    } else {
      res.json({
        code: 200,
        message: "User data fetched successfully!",
        data: {
          email: data.email,
          userType: data.userType,
          username: data.username,
        },
      });
    }
  }).catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update-user-info").post((req, res) => {
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  let dataToUpdate = {};
  if (username) dataToUpdate["username"] = username;
  if (password) dataToUpdate["password"] = get_encrypted_value(password);
  User.findOneAndUpdate(
    { email: email },
    dataToUpdate,
    {
      useFindAndModify: false,
    },
    function (err, data) {
      res.json({
        code: 200,
        message: "Data updated successfully!",
      });
    }
  ).catch((err) => {
    res.status(400).json("Error: " + err);
  });
});

router.route("/:email").delete((req, res) => {
  let email = req.params.email;
  User.findOneAndDelete({ email: email }, { useFindAndModify: false })
    .then(() => res.json({ code: 200, message: "User deleted successfully!" }))
    .catch((err) => res.status(400).json("Error: " + err));
});

function get_encrypted_value(pass) {
  var cipher = crypto.createCipher(algorithm, pass);
  var encrypted_pass = cipher.update(pass, "utf8", "hex") + cipher.final("hex");
  return encrypted_pass;
}

module.exports = router;
