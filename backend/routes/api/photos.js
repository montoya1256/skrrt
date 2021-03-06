const express = require("express");
const asyncHandler = require("express-async-handler");

const { Photo } = require("../../db/models");
const { Tag } = require("../../db/models");
const { TagName } = require("../../db/models");

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
  handleValidationErrors,
];

router.post(
  "/",
  singleMulterUpload("image"),
  validateImage,
  asyncHandler(async (req, res) => {
    const { title, description, userId, albumId, tagNameId } = req.body;
    const carImageUrl = await singlePublicFileUpload(req.file);
    const carImage = await Photo.create({
      title,
      description,
      photo_url: carImageUrl,
      userId,
      albumId,
    });
    const tag = await Tag.create({
      photoId: carImage.id,
      tagNameId,
    });
    return res.json({
      carImage,
      tag,
    });
  })
);

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const photos = await Photo.findAll();
    return res.json(photos);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const photo = await Photo.findByPk(req.params.id);
    return res.json(photo);
  })
);

router.get(
  "/:id/tags",
  asyncHandler(async (req, res) => {
    const photo = await Photo.findByPk(req.params.id, {
      include: {
        model: TagName,
      },
    });
    return res.json(photo);
  })
);

router.patch(
  "/:photoId/tags",
  validateImage,
  asyncHandler(async (req, res) => {
    const photoId = parseInt(req.params.photoId, 10);
    const { title, description, tagNameId } = req.body;
    const newImage = await Photo.findByPk(photoId, {
      include: {
        model: TagName,
      },
    });
    const newTag = await Tag.findOne({
      where: {
        photoId
      }
    });
    const newTagEdit = {tagNameId, photoId}
    const edit = { title, description };
    await newTag.update(newTagEdit)
    await newImage.update(edit);
    const finalImage = await Photo.findByPk(photoId, {
      include: {
        model: TagName,
      },
    })
    return res.json(finalImage);
  })
);

router.delete(
  "/:photoId",
  asyncHandler(async (req, res) => {
    const photoId = parseInt(req.params.photoId, 10);
    const image = await Photo.findByPk(photoId);
    const imageTag = await Tag.findOne({
      where: {
        photoId
      }
    })
    await imageTag.destroy();
    await image.destroy();
    return res.json({ message: "Image has been deleted" });
  })
);

module.exports = router;
