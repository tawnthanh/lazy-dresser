'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ItemTypes', [
      { type: "Outerwear" },
      {type: "Sweater/Sweatshirt"},
      {type: "Dress"},
      {type: "Top"},
      {type: "Bottom"},
      {type: "Shoes"},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ItemTypes', null, {});
  }
};
