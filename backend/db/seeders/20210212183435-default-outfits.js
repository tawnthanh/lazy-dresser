'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Outfits', [
      // title, description, userId
      {title:"Date Night", description: "Had a lot of successful first dates with this", userId: 1},
      {title:"Dressy Casual", description: "So many compliments on this lazy outfit", userId: 1},
      {title:"My coder outfit to work", description: "found a nice purpose for the pants", userId: 1},
      { title: "Edgy Dark Academia", description: "I hope I look like I study", userId: 1 },
      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Outfits', null, {});
  }
};
