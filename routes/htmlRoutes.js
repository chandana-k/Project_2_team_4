// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
// Authentication middleware
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    // If the user already has an account send them to the main page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("non-auth", { message: "not authenticated" });
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/members", isAuthenticated, function (req, res) {
    res.render("auth", {
      uname: [
        req.user.uname
      ]
    });
  });

  app.get("/signup", function (req, res) {
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

};
