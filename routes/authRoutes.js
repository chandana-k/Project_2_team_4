// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var removePunctuation = require('remove-punctuation');

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    var d = req.body.data;
    var email = d.email;
    var pass = d.password;

    db.User.findOne({
      where: {
        email: email
      }
    }).then(function (result) {
      if (result !== null) {
        console.log("EMAIL MATCHED");
        res.json({ message: "exists" });
      } else {
        console.log("NO MATCHING EMAIL");
        addRecord(email, pass, res);
      }
    });

  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // this function creates the db record and creates the general table.
  function addRecord(email, pass, res) {
    var uname = email.substring(0, email.indexOf("@"));
    uname = removePunctuation(uname);
    db.User.create({
      email: email,
      password: pass,
      uname: uname
    }).then(function (resp) {
      console.log(resp.dataValues.id);
      // Create new general table for this new user... (This model hasn't been defined in models folder because we don)
      createGeneralTable(uname, uname + "General");
      res.json("/members");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
    });
  }

  function createGeneralTable(uname, tabName) {
    db.sequelize.query("CREATE TABLE " + tabName + " (id INT not null auto_increment, itemName VARCHAR(255) not null UNIQUE, itemUrl varchar(255) not null, public BOOLEAN default false, primary key (id));").then(function (resp) {
      console.log(resp);
      db.User.findOne({
        where: {
          uname: uname
        }
      }).then(function (resp) {
        db.Table.create({
          tableName: tabName,
          UserId: resp.dataValues.id
        }).then(function (resp) {
          console.log(resp);
          console.log("Table entry success");
        });
      });
    });
  }

};