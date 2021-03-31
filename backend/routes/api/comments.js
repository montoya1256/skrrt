const express = require("express");
const asyncHandler = require("express-async-handler");

const { Comment } = require("../../db/models");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const commentValidation = [
  check("description")
    .exists({ checkFalsy: true })
    .withMessage("You must provide a comment to comment")
    .isLength({ max: 256 })
    .withMessage("Please keep your comments shorter than 256 characters")
    .isLength({ min: 4 })
    .withMessage("please provide a comment longer that 4 characters"),
  handleValidationErrors,
];

router.post(
  "/",
  commentValidation,
  asyncHandler(async (req, res) => {
    const { description, userId, photoId } = req.body;
    const comment = await Comment.create({
      description,
      userId,
      photoId,
    });
    return res.json({
      comment,
    });
  })
);

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const comments = await Comment.findAll({});
    return res.json(comments);
  })
);

router.get(
  "/photos/:photoId",
  asyncHandler(async (req, res) => {
    const photoId = parseInt(req.params.photoId);
    const comments = await Comment.findAll({
      where: {
        photoId,
      },
    });
    return res.json(comments);
  })
);

router.patch(
  '/:commentId',
  commentValidation,
  asyncHandler(async (req, res) => {
    const commentId = parseInt(req.params.commentId, 10)
    const { description } = req.body;
    const newComment = await Comment.findByPk(commentId);
    const edit = {description}
    await newComment.update(edit)
    return res.json(newComment)
  })
)

router.delete(
  '/:commentId',
  asyncHandler(async(req, res) => {
    const commentId = parseInt(req.params.commentId, 10)
    const comment = await Comment.findByPk(commentId);
    await comment.destroy();
    return res.json({message: 'Comment has been deleted'})
  })
)

module.exports = router;
