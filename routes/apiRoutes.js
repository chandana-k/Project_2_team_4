var db = require("../models");
var request = require("request");
var keys = require("../keys.js");

module.exports = function (app) {

  // Get all users
  app.get("/users", function (req, res) {
    db.User.findAll({}).then(function (resp) {
      res.json(resp);
    });
  });

  // Get current user
  app.get("/users/me", function (req, res) {
    if (req.user) {
      db.User.findOne({
        where: {
          id: req.user.id
        },
        include: [{ model: db.Table, as: "canView" }]
      }).then(function (resp) {
        res.json(resp);
      });
    }
    else {
      res.json({ message: "not authenticaed" });
    }
  });

  // Get a user by ID
  app.get("/users/:id", function (req, res) {
    var id = req.params.id;
    db.User.findOne({
      where:
      {
        id: id
      }
    }).then(function (resp) {
      res.json(resp);
    });
  });

  // Get all table names
  app.get("/tables", function (req, res) {
    db.Table.findAll({}).then(function (resp) {
      res.json(resp);
    });
  });

  // Get one table by ID
  app.get("/tables/:id", function (req, res) {
    db.Table.findOne({
      where: {
        id: req.params.id
      },
      include: [{ model: db.User, as: 'hasViewers' }]
    }).then(function (resp) {
      res.json(resp);
    });
  });

  // Get a specific table by name
  app.get("/tables/name/:name", function (req, res) {
    var tName = req.params.name;
    console.log(tName);
    db.sequelize.query("SELECT * FROM " + tName + ";").then(function (resp) {
      res.json(resp);
    });
  });


  app.post("/api/search", function (req, res) {
    console.log("etsy route is hit");
    var search = Object.keys(req.body)[0].trim();
    console.log(search);
    if (search.length !== 0) {
      request("https://openapi.etsy.com/v2/listings/active.js?keywords=" + search + "&limit=10&includes=Images:1&api_key=" + keys.etsy.id, function (error, response, body) {

        // Print the error if one occurred
        console.log('error:', error);
        // Print the response status code if a response was received
        console.log('statusCode:', response && response.statusCode);

        if (!error) {
          var results = JSON.parse(unwrapJSONP(body)).results;
          var hbp = handlebarFriendlyJSON(results);
          if (req.user) {
            res.render("card", { wishes: hbp });
          }
          else {
            res.render("card", { wishes: hbp });
          }
        }
        else {
          res.json({ message: "Error: " + error.id });
        }

      });
    }

  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // JSONP helper functions:

  // Turns the jsonp from Etsy into actual json
  function unwrapJSONP(jsonp) {
    return jsonp.slice(5, jsonp.length - 2);
  }
  // Turn the Etsy json into an object that handlebars can use
  function handlebarFriendlyJSON(obj) {
    var partialData = [];
    obj.forEach(function (i) {
      partialData.push({
        name: i.title,
        url: stripParams(i.url),
        img: i.Images[0].url_fullxfull
      });
    });
    return partialData;
  }
  // Strip parameters off etsy url
  function stripParams(url) {
    return url.substring(0, url.indexOf("?"));
  }

};
