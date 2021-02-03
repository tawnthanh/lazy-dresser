'use strict';
module.exports = (sequelize, DataTypes) => {
  const Occasion = sequelize.define('Occasion', {
    type: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Occasion.associate = function (models) {
    // associations can be defined here
    Occasion.hasMany(models.ClothingItem, {foreignKey:"occasionId"})
  };
  return Occasion;
};
