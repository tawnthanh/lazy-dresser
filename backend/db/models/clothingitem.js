'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClothingItem = sequelize.define('ClothingItem', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    primaryColor: DataTypes.STRING,
    secondaryColor: DataTypes.STRING,
    itemTypeId: DataTypes.INTEGER,
    fitId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    occasionId: DataTypes.INTEGER
  }, {});
  ClothingItem.associate = function(models) {
    const columnMapping = {
      through: 'OutfitList',
      otherKey: 'outfitId',
      foreignKey: 'clothingItemId'
    }
    ClothingItem.belongsToMany(models.Outfit, columnMapping)

    ClothingItem.belongsTo(models.User, { foreignKey: "userId" });
    ClothingItem.belongsTo(models.ItemType, { foreignKey: "itemTypeId" });
    ClothingItem.belongsTo(models.Fit, { foreignKey: "fitId" });
    ClothingItem.belongsTo(models.Occasion, { foreignKey: "occasionId" });
  };

  ClothingItem.addItem = async function ({ title, description, imgUrl, primaryColor, secondaryColor, itemTypeId, fitId, userId, occasionId }) {
    const item = await ClothingItem.create({
      title,
      description,
      imgUrl,
      primaryColor,
      secondaryColor,
      itemTypeId,
      fitId,
      userId,
      occasionId
    });
    return await ClothingItem.scope('currentItem').findByPk(item.id);
  }
  return ClothingItem;
};
