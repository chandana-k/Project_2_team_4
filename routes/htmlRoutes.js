// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
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
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("index", { wishes: hbobj });
      // res.sendFile(path.join(__dirname, "../public/example.html")); // just for testing
      // res.redirect("/members");
    }
    // res.sendFile(path.join(__dirname, "../public/example.html")); // just for testing
    // res.sendFile(path.join(__dirname, "../public/signup.html"));
    res.render("index", { wishes: hbobj });
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/example.html"));
  });

  app.get("/example/:id", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/example.html"));
  });

};
