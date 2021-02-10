const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');
const { Outfit, OutfitList, ClothingItem, Fit, Occasion, ItemType } = require('../../db/models');

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
  let outfits = await Outfit.findAll({
    where: { "userId": userId },
    include: {
      model: ClothingItem,
      include: [Fit, Occasion, ItemType]
    }
  });

  return res.json(outfits)
}));

router.delete("/:outfitId/delete", asyncHandler(async (req, res) => {
  let outfitId = req.params.outfitId;
  outfitId = parseInt(outfitId);

  const items = await OutfitList.findAll({ where: { "outfitId": outfitId } });

  items.map(async (item) => {
    item = item.toJSON()
    await OutfitList.destroy({ where: { "outfitId": item.outfitId } })
  });

  await Outfit.destroy({where: {"id": outfitId}})
  return res.json({"deleted":items})

}))


module.exports = router;
