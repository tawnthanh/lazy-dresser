const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');

const { handleValidationErrors } = require('../../utils/validation');
// const { setTokenCookie } = require('../../utils/auth');
const { ClothingItem, ItemType, Occasion, Fit } = require('../../db/models');
const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3');


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
  console.log(req.body)
  return res.json({"hi": "hi"})
}));


module.exports = router;
