'use strict';
module.exports = (sequelize, DataTypes) => {
  const Outfit = sequelize.define('Outfit', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Outfit.associate = function(models) {
    // associations can be defined here
    Outfit.hasMany(models.User, { foreignKey: "userId" })

    Outfit.belongsToMany(models.ClothingItem, {
      through: "OutfitList",
      otherKey: "clothingItemId",
      foreignKey: "outfitId"
    });
    Outfit.belongsToMany(models.ClothingItem, {
      through: "ClosetOutfits",
      otherKey: "closetId",
      foreignKey: "outfitId"
    });
  };
  return Outfit;
};
