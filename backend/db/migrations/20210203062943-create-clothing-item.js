'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ClothingItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      primaryColor: {
        allowNull: false,
        type: Sequelize.STRING
      },
      secondaryColor: {
        allowNull: false,
        type: Sequelize.STRING
      },
      itemTypeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model:'ItemTypes'}
      },
      fitId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Fits'}

      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model:'Users'}
      },
      occasionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model:'Occasions'}
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
    return queryInterface.dropTable('ClothingItems');
  }
};
