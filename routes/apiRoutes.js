var db = require("../models");
var request = require("request");
var keys = require("../public/keys.js");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.User.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Get an example by id
  app.get("/api/examples/:id", function(req, res) {
    db.Example.findOne({where: {id: req.params.id}}).then(function(dbExamples) {
      res.json(dbExamples);
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
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
