// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var General = sequelize.define("General", {
    // The email cannot be null, and must be a proper email before creation
    
    // list of tables created in JSON format so that we can use JSON.stringify/JSON.parse
    itemName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    itemURL: {
      type: DataTypes.STRING,
      allowNull: false
    },

    purchased: { //if item is purchased then this turns true and allows item to be removed from registry.
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false, //0 in sql database. 1 is true.
    },

    

  });

  General.associate = function(models) {
    General.belongsTo(models.User);
    
  };

  return General;
};
