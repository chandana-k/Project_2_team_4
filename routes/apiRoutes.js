var db = require("../models");

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
      console.log("body", req.body);
      res.send("hey");
       //  var searchButton = function() {
       //         var request = require("request");
               
       //         request({
       //             ETSY_SECRET: process.env.ETSY_SECRET,
       //             ETSY_ID: process.env.ETSY_ID
       //         });
       //     };
   
       //     res.sendFile(path.join(__dirname, "../public/example.html"));
       //     searchButton();
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
