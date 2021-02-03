'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Fits', [
      { type: "Fitted" },
      { type: "Loose" },
      { type: "Tight" },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Fits', null, {});
  }
};
