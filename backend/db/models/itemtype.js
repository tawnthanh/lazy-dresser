'use strict';
module.exports = (sequelize, DataTypes) => {
  const itemType = sequelize.define('ItemType', {
    type: DataTypes.STRING
  }, {});
  itemType.associate = function(models) {
    // associations can be defined here
    itemType.hasMany(models.ClothingItem, {foreignKey: "itemTypeId"})
  };
  return itemType;
};
