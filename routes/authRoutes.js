// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var path = require("path");
module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error });

  // Route for getting some data about our user to be used client side
  app.get("/", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send the example.html
      res.sendFile("example.html", { root: path.join("public") });
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
      //res.render(hb for Users Wishlist)

      
    }
  });

};
