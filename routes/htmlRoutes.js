// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Test data to be removed later
var hbobj = [
  {
    name: "karsten",
    url: "http://etcetc.com",
    img: "the image url"
  },
  {
    name: "chandana",
    url: "http://onetwo.com",
    img: "the image url"
  },
  {
    name: "greg",
    url: "http://cheesy.com",
    img: "the image url"
  }
];

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    // If the user already has an account send them to the main page
    if (req.user) {
      res.render("auth", { obj: hbobj });
    }
    res.render("non-auth", { obj: hbobj });
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("auth");
    }
    //res.render("login");
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/etsy", function (req, res) {
    //search bar
    res.sendFile(path.join(__dirname, "../public/example.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/landing.html"));
  });

  // OLD route NOT USED
  // app.get("/example/:id", isAuthenticated, function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/example.html"));
  // });

};
