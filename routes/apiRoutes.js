var db = require("../models");
var request = require("request");
var keys = require("../public/keys.js");

module.exports = function (app) {

  // Get all users
  app.get("/users", function (req, res) {
    db.User.findAll({}).then(function (resp) {
      res.json(resp);
    });
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

  // Get a specific table by name
  app.get("/tables/name/:name", function (req, res) {
    var tName = req.params.name;
    console.log(tName);
    db.sequelize.query("SELECT * FROM " + tName + ";").then(function (resp) {
      res.json(resp);
    });
  });

 
app.post("/etsysearch", function(req, res) {
      console.log("etsy route is hit");
      console.log("body", req.body.data);
      var search = req.body.data;
      request("https://openapi.etsy.com/v2/listings/active.js?keywords=" + search + "&limit=12&includes=Images:1&api_key=a2p83t9puv67kp0dnvsd4yka", function (error, response, body) {

        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); 

        res.json(body);
      });

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
};
