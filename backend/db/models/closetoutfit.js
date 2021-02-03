'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClosetOutfit = sequelize.define('ClosetOutfit', {
    closetId: DataTypes.INTEGER,
    outfitId: DataTypes.INTEGER
  }, {});
  ClosetOutfit.associate = function(models) {
    // associations can be defined here
  };
  return ClosetOutfit;
};
