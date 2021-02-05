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
    .withMessage('Please provide a title with at least 5 characters'),
  check('primaryColor')
    .exists({ checkFalsy: true })
    .isLength({ max: 7 })
    .withMessage('Please select a primary color.'),
  check('secondaryColor')
    .exists({ checkFalsy: true })
    .isLength({ max: 7 })
    .withMessage('Please select a secondary color.'),
  check('itemTypeId')
    .exists({ checkFalsy: true })
    .withMessage('Please select an item type.'),
  check('fitId')
    .exists({ checkFalsy: true })
    .withMessage('Please select a fit type.'),
  check('occasionId')
    .exists({ checkFalsy: true })
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
  asyncHandler( async (req, res) => {
    const { title, description, primaryColor, secondaryColor, itemTypeId, fitId, userId, occasionId } = req.body;
    const imgUrl =  singlePublicFileUpload(req.file);

    const item = await ClothingItem.addItem({ title, description, imgUrl, primaryColor, secondaryColor, itemTypeId, fitId, userId, occasionId });

    setTokenCookie(res, item);

    return res.json({ item });
  })
)

module.exports = router;
