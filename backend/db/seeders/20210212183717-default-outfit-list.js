'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('OutfitLists', [
      // title, description, userId
      { clothingItemId: 9, outfitId: 1 },
      { clothingItemId: 26, outfitId: 1 },
      { clothingItemId: 33, outfitId: 2},
      { clothingItemId: 18, outfitId: 2 },
      { clothingItemId: 3, outfitId: 2 },
      { clothingItemId: 23, outfitId: 2 },
      { clothingItemId: 19, outfitId: 3 },
      { clothingItemId: 4, outfitId: 3 },
      { clothingItemId: 27, outfitId: 3 },
      { clothingItemId: 15, outfitId: 4 },
      { clothingItemId: 30, outfitId: 4 },
      { clothingItemId: 5, outfitId: 4 },
      { clothingItemId: 23, outfitId: 4 },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Outfits', null, {});
  }
};
