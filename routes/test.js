var db = require("../models");

module.exports = function(app) {
  // Get each user and include all tables that each user can view
  // app.get("/user", function (req, res) {
  //   db.User.findAll({
  //     include: [{ model: db.Table, as: "canView" }]
  //   }).then(function (results) {
  //     res.json(results);
  //   });
  // });
  // // Get each table and include the users that can view that table
  // app.get("/table", function (req, res) {
  //   db.Table.findAll({
  //     include: [{ model: db.User, as: 'hasViewers' }]
  //   }).then(function (results) {
  //     res.json(results);
  //   });
  // });
};
