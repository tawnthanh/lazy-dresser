'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Occasions', [
      { type: "Daytime" },
      { type: "Nighttime" },
      { type: "Casual" },
      { type: "Dressy" },
      { type: "Athletic" },
      { type: "Business" },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Occasions', null, {});
  }
};
