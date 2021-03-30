const express = require("express");
const asyncHandler = require("express-async-handler");

const { Photo } = require("../../db/models");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const { singlePublicFileUpload, singleMulterUpload } = require("../../awsS3");


const router = express.Router();

const validateImage = [
  check("title")
    .exists({ checkFalsy: true })
    .withMessage("You must provide a title for your image")
    .isLength({ max: 256 })
    .withMessage("Your image title cannot be longer than 256 characters")
    .isLength({ min: 4 })
    .withMessage("Please provide a title with at least 4 characters."),
  // check("image")
  //   .exists({ checkFalsy: true })
  //   .withMessage("Please select a photo to import"),
  handleValidationErrors
];

router.post(
  "/",
  singleMulterUpload("image"),
  validateImage,
  asyncHandler(async (req, res) => {
    // console.log('hello -----------------------------------------')
    const { title, description, userId, albumId } = req.body;
    const carImageUrl = await singlePublicFileUpload(req.file);
    const carImage = await Photo.create({
      title,
      description,
      photo_url: carImageUrl,
      userId,
      albumId
    })
    return res.json({
      carImage,
    })
  })
);


router.get('/', asyncHandler(async (req, res) => {
  const photos = await Photo.findAll()
  console.log('Please find me \n -----------------------------------------')
  console.log('Please find meeee \n -----------------------------------------',photos)
  console.log('Pldsadasease find me \n -----------------------------------------',res.json(photos))
  return res.json(photos)
}));

module.exports = router;
