var db = require("../models");

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
