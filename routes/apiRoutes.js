var db = require("../models");

module.exports = function(app) {
  // Get all of the list items on the wish list. Each item has its own card on the front end
  app.get("/api/general", function(req, res) {
    db.general.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Get an example by id
  app.get("/api/examples/:id", function(req, res) {
    db.Example.findOne({where: {id: req.params.id}}).then(function(dbExamples) {
      res.json(dbExamples);
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
