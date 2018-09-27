var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
// var wish = require("../models/user.js");

var hbsObject = {
  name : "karsten",
  url: "image.jpg",
  img: "chicken"
};

module.exports = function (app) {
  // Create all our routes and set up logic within those routes where required.
  router.get("/", function (req, res) {
    res.render("index", {obj: hbsObject});
  });
}
