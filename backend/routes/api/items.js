const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie } = require('../../utils/auth');
const { ClothingItem, ItemType, Occasion, Fit } = require('../../db/models');
const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3');


const router = express.Router();

const validateItemUpload = [
  check('title')
    .exists({ checkFalsy: true })
    .isLength({ min: 5 })
    .withMessage('Title must be at least 5 characters.'),
  check('primaryColor')
    // .exists({ checkFalsy: true })
    .isLength({ min: 7 })
    .withMessage('Please select a primary color.'),
  check('secondaryColor')
    // .exists({ checkFalsy: true })
    .isLength({ min: 7 })
    .withMessage('Please select a secondary color.'),
  check('itemTypeId')
    .isInt({min:1})
    .withMessage('Please select an item type.'),
  check('fitId')
    .isInt({min:1})
    .withMessage('Please select a fit type.'),
  check('occasionId')
    .isInt({min:1})
    .withMessage('Please select an occasion.'),
  handleValidationErrors
];


//Fixed fields
router.get("/fixed-fields", asyncHandler(async (req, res) => {
  const itemTypePull = await ItemType.findAll({order: [["type", "ASC"]]});
  const itemTypes = itemTypePull.map(itemType =>[itemType.id, itemType.type]);

  const fitPull = await Fit.findAll({ order: [["type", "ASC"]] });
  const fits = fitPull.map(fits => [fits.id, fits.type]);

  const occasionPull = await Occasion.findAll({ order: [["type", "ASC"]] });
  const occasions = occasionPull.map(occasion => [occasion.id, occasion.type]);

  return res.json({itemTypes, fits, occasions})
}));


// Create Item
router.post("/create",
  singleMulterUpload("image"),
  validateItemUpload,
  asyncHandler(async (req, res) => {
    const { title, description, primaryColor, secondaryColor, itemTypeId, fitId, userId, occasionId } = req.body;
    const imgUrl = await singlePublicFileUpload(req.file);

    // console.log(imgUrl)
    const item = await ClothingItem.create({
      title,
      description,
      imgUrl,
      primaryColor,
      secondaryColor,
      itemTypeId,
      fitId,
      userId,
      occasionId
    });

    // setTokenCookie(res, item);

    console.log("ADD ITEM SUCCESSFUL!!!!!!!!!!!!!!!")
    return res.json({ item });
  })
);

// Inventory List of Items
router.get("/:userId/item-inventory", asyncHandler(async (req, res) => {
  const userId = req.params.userId;
  const items = await ClothingItem.findAll({
    where: { "userId": userId },
    order: [["itemTypeId", "ASC"]],
    include: [Fit, ItemType, Occasion]
  })
  return res.json({ "inventory": items })
}));

router.delete("/:itemId/delete", asyncHandler(async (req, res) => {
  const itemId = req.params.itemId;
  const { userId } = req.body;

  const clothingItem = await ClothingItem.findByPk(itemId);
  await clothingItem.destroy();

  const inventory = await ClothingItem.findAll({
    where: { "userId": userId },
    order: [["itemTypeId", "ASC"]],
    include: [Fit, ItemType, Occasion]
  });

  return res.json({ inventory });
}))

router.get("/:itemId/delete", asyncHandler(async (req, res) => {
  const itemId = req.params.itemId;


  const clothingItem = await ClothingItem.findByPk(6);
  console.log(clothingItem);
  return res.json({ clothingItem });
}))


module.exports = router;
