'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OutfitLists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clothingItemId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'ClothingItems'}
      },
      outfitId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Outfits'}
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('OutfitLists');
  }
};
