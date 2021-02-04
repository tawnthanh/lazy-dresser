const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie } = require('../../utils/auth');
const { ClothingItem } = require('../../db/models');
const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3.js');


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


// Create Item
router.post("/create",
  singleMulterUpload("image"),
  validateItemUpload,
  asyncHandler(async(req, res => {
    const { title, description, primaryColor, secondaryColor, itemTypeId, fitId, userId, occasionId } = req.body;
    const imgUrl = await singlePublicFileUpload(req.file);

    const item = await ClothingItem.addItem({ title, description, imgUrl, primaryColor, secondaryColor, itemTypeId, fitId, userId, occasionId });

    await setTokenCookie(res, item);

    return res.json({ item });
  }))
)

module.exports = router;
