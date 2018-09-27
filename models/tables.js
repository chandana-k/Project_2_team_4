// Author: Karsten Rabe

module.exports = function (sequelize, DataTypes) {
  var Table = sequelize.define("Table", {
    tableName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    eventDate: DataTypes.Date
  });

  Table.associate = function (models) {
    // We're saying that a Table should belong to a User
    // A Table can't be created without a User due to the foreign key constraint
    Table.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Table.belongsToMany(models.User, {
      as: "hasViewers",
      through: "permissions",
      foreignKey: "tableId"
    });
  };

  return Table;
};

