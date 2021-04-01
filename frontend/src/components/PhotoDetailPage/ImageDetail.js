import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import * as commentActions from "../../store/comments";
import styles from "./PhotoDetail.module.css";

function ImageDetail({ title, imgdescription }) {
  const dispatch = useDispatch();
  const { photoId } = useParams();

  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);
  const [editComment, setEditComment] = useState(false);
  const [editItemId, setEditItemId] = useState(null);

  const sessionUser = useSelector((state) => state.session.user);
  const currentPhoto = useSelector((state) => state.photo.currentPhoto);
  const photoComments = useSelector((state) => state.comments.photoComments);

  const editThisComment = photoComments?.find(
    (comment) => comment.id === editItemId
  );

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];
    dispatch(
      commentActions.createComment({
        description,
        userId: sessionUser.id,
        photoId: currentPhoto.id,
      })
    )
      .then(() => {
        return setDescription("");
      })
      .catch(async (res) => {
        console.log("looking", res);
        const data = await res.json();
        if (data && data.errors) {
          newErrors = data.errors;
          setErrors(newErrors);
        }
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const newComment = {
      id: editItemId,
      description,
      userId: editThisComment.userId,
      photoId: editThisComment.photoId,
    };
    dispatch(commentActions.editComment(newComment))
    .then(() => {
      setEditComment(false)
      return setDescription('')
    });

  };

  let content = null;

  if (editComment) {
    content = (
      <div>
        <textarea
            placholder="Add a comment"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        <button type="button" onClick={handleUpdate}>
          Confirm edit
        </button>
      </div>
    );
  } else {
    content = (
      <div>
        <ul>
          {photoComments?.map((comment) => (
            <div>
              {content}
              <li key={comment.id}>{comment.description}</li>
              <button
                className={`${comment.id}`}
                type="button"
                onClick={() => {
                  setEditItemId(comment.id);
                  setEditComment(true);
                }}
              >
                edit
              </button>
            </div>
          ))}
        </ul>
        <div>
          <textarea
            placholder="Add a comment"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Comment</button>
      </div>
    );
  }

  useEffect(() => {
    setEditItemId(null);
    setEditComment(false);
    // dispatch(commentActions.editComment(commentId))
    dispatch(commentActions.getComments(photoId));
  }, [dispatch, photoId]);

  return (
    <div>
      <form onSubmit={handleCommentSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li className="error-msg" key={idx}>
              {error}
            </li>
          ))}
        </ul>
        <div>
          <div>{title}</div>
          <p>{imgdescription}</p>
          <div>{content}</div>
        </div>
      </form>
    </div>
  );
}

export default ImageDetail;
