const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');
const { Outfit, OutfitList, ClothingItem } = require('../../db/models');

const { handleValidationErrors } = require('../../utils/validation');


const router = express.Router();

const validateOutfitUpload = [
  check('title')
    .isLength({ min: 5 })
    .withMessage('Title must be at least 5 characters.'),
  check('description')
    .isLength({ max: 1000 })
    .withMessage('Description must be under 1000 characters.'),
  handleValidationErrors
];

router.post("/create", validateOutfitUpload, asyncHandler(async (req, res) => {
  const { title, description, userId, outerwear, dress, top, sweater, bottom, shoes } = req.body;

  let outfit = await Outfit.create({ userId, title, description })
  outfit = outfit.toJSON();
  console.log(outfit);
  if (outerwear.id) OutfitList.create({ "outfitId": outfit.id, "clothingItemId": outerwear.id });
  if (dress.id) OutfitList.create({ "outfitId": outfit.id, "clothingItemId": dress.id });
  if (top.id) OutfitList.create({ "outfitId": outfit.id, "clothingItemId": top.id });
  if (sweater.id) OutfitList.create({ "outfitId": outfit.id, "clothingItemId": sweater.id });
  if (bottom.id) OutfitList.create({ "outfitId": outfit.id, "clothingItemId": bottom.id });
  if (shoes.id) OutfitList.create({ "outfitId": outfit.id, "clothingItemId": shoes.id });
  return res.json({
    "outfit": {
      "id": outfit.id,
      "title": outfit.title,
      "description": outfit.description,
      outerwear,
      dress,
      top,
      sweater,
      bottom,
      shoes
    }
  })
}));

router.get("/:userId", asyncHandler(async (req, res) => {
  let userId = req.params.userId;
  userId = parseInt(userId);
  console.log(userId)
  let outfits = await Outfit.findAll({
    where: {"userId": userId},
    include: [ClothingItem]
  });

  return res.json(outfits)
}))
module.exports = router;
