//jshint esversion: 6
// Author: karsten Rabe (krab7191)

// This model defines a DB table of wishlist table names and their public/private permissions

module.exports = function (sequelize, DataTypes) {
  var Permissions = sequelize.define("Permissions", {
    wishlistTableName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    ownerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    public: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  });
  return Permissions;
};