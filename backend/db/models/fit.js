'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fit = sequelize.define('Fit', {
    type: DataTypes.STRING
  }, {});
  Fit.associate = function(models) {
    // associations can be defined here
    Fit.hasMany(models.ClothingItem, {foreignKey:"fitId"})
  };
  return Fit;
};
