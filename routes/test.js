var db = require("../models");

module.exports = function (app) {
  app.get("/user", function (req, res) {
    db.User.findAll({
      include: [{ model: db.Table, as: "canView" }]
    }).then(function (results) {
      res.json(results);
    });
  });
  app.get("/table", function (req, res) {
    db.Table.findAll({
      include: [db.User]
    }).then(function (results) {
      res.json(results);
    });
  });
};