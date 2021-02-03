'use strict';
module.exports = (sequelize, DataTypes) => {
  const Closet = sequelize.define('Closet', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    outfitId: DataTypes.INTEGER,
    occasionId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Closet.associate = function(models) {
    // associations can be defined here
    Closet.belongsTo(models.User, { foreignKey: 'userId' });
    Closet.belongsTo(models.Occasion, { foreignKey: 'occasionId' });
    Closet.belongsTo(models.Outfit, { foreignKey: 'outfitId' });

    Closet.belongsToMany(models.Outfits, {
      through: "ClosetOutfit",
      otherKey: "outfitId",
      foreignKey: "closetId"
    })
  };
  return Closet;
};
