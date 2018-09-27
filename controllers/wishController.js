var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var wish = require("../models/user.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  wish.all(function(data) {
    var hbsObject = {
    //   wishes: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});