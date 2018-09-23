module.exports = function (sequelize, DataTypes) {
  var General = sequelize.define("General", {
    // The item cannot be null, and must have a URL for online access
    item: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },

    // The item_URL cannot be null. It is needed for online access.
    itemURL: {
      type: DataTypes.STRING,
      allowNull: false
    }


  });

  return General;
};