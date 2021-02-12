'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ClothingItems', [
      // title, description, imgUrl, primaryColor, secondaryColor, itemTypeId, fitId, userId, occasionId
      {title:"boyfriend jeans", description: "they're alright", imgUrl: "imgs/b-1.jpg", primaryColor:"#4b639c", secondaryColor: "#a4bcec", itemTypeId: 5, fitId: 2, userId: 1, occasionId: 3},
      {title:"leather leggings", description: null, imgUrl: "/imgs/b-2.jpg", primaryColor:"#424242", secondaryColor: "#424242", itemTypeId: 5, fitId: 3, userId: 1, occasionId: 2},
      {title:"skinny jeans", description: "goes with everything", imgUrl: "/imgs/b-3.jpg", primaryColor:"#243755", secondaryColor: "#243755", itemTypeId: 5, fitId: 1, userId: 1, occasionId: 1},
      {title:"dressy wideleg pants", description: "Idk what to wear with this. Worn once?", imgUrl: "/imgs/b-5.jpg", primaryColor:"#f4c297", secondaryColor: "#f4c297", itemTypeId: 5, fitId: 2, userId: 1, occasionId: 6},
      {title:"brown plaid skirt", description: "living my dark academia life", imgUrl: "/imgs/b-6.jpg", primaryColor:"#54442c", secondaryColor: "#54442c", itemTypeId: 5, fitId: 1, userId: 1, occasionId: 1},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ClothingItems', null, {});
  }
};


