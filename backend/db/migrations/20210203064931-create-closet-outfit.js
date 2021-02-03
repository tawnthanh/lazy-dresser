'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ClosetOutfits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      closetId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Closets'}
      },
      outfitId: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('ClosetOutfits');
  }
};
