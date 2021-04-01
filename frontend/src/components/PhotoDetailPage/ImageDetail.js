import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import * as commentActions from "../../store/comments";
import styles from "./comment.module.css";

function ImageDetail({ title, imgdescription }) {
  const dispatch = useDispatch();
  const { photoId } = useParams();

  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);
  const [editComment, setEditComment] = useState(false);
  const [editItemId, setEditItemId] = useState(null);
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const sessionUser = useSelector((state) => state.session.user);
  const currentPhoto = useSelector((state) => state.photo.currentPhoto);
  const photoComments = useSelector((state) => state.comments.photoComments);
  // const users = useSelector((state) => state.users)

  const editThisComment = photoComments?.find(
    (comment) => comment.id === editItemId
  );

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

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
    dispatch(commentActions.editComment(newComment)).then(() => {
      setEditComment(false);
      return setDescription("");
    });
  };

  let content = null;

  if (editComment) {
    content = (
      <div className={styles.commentTextArea}>
        <button type='button' onClick={() => setEditComment(false)}>Cancel Edit</button>
        <textarea
          placholder="Add a comment"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button
          className={styles.confirmEditBtn}
          type="button"
          onClick={handleUpdate}
        >
          Confirm edit
        </button>
      </div>
    );
  } else {
    content = (
      <div>
        <div>
          {photoComments?.map((comment) => (
            <div>
              {content}
              <div key={comment.id} className={styles.commentSection_comment}>
                {comment.description}
                <button
                  className={`${comment.id} ${styles.editBTN}`}
                  type="button"
                  onClick={() => {
                    setEditItemId(comment.id);
                    setEditComment(true);
                  }}
                >
                  <i className="far fa-edit"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.commentTextArea}>
          <textarea
            value={description}
            placholder={`Add a comment`}
            required
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        {description.length > 4 ? (
          <button type="submit">Comment</button>
        ) : (
          <span></span>
        )}
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
    <div className={styles.photoDetail}>
      <form onSubmit={handleCommentSubmit} className={styles.commentSection}>
        <ul>
          {errors.map((error, idx) => (
            <li className="error-msg" key={idx}>
              {error}
            </li>
          ))}
        </ul>
        <div>
          <div className={styles.title}>{title}</div>
          <p className={styles.imgdescription}>{imgdescription}</p>
          <p className={styles.title}>Comments</p>
          <div>{content}</div>
        </div>
      </form>
    </div>
  );
}

export default ImageDetail;
