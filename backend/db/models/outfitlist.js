'use strict';
module.exports = (sequelize, DataTypes) => {
  const OutfitList = sequelize.define('OutfitList', {
    clothingItemId: DataTypes.INTEGER,
    outfitId: DataTypes.INTEGER
  }, {});
  OutfitList.associate = function(models) {
    // associations can be defined here
  };
  return OutfitList;
};