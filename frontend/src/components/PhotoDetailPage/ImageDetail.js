import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import * as commentActions from "../../store/comments";
import * as photoActions from "../../store/photos";
import styles from "./comment.module.css";

function ImageDetail({ title, imgdescription, photo_url }) {
  const dispatch = useDispatch();
  const { photoId } = useParams();

  const [description, setDescription] = useState("");
  // const [newdescription, setnewDescription] = useState(description);
  const [errors, setErrors] = useState([]);
  const [editComment, setEditComment] = useState(false);
  const [editItemId, setEditItemId] = useState(null);
  const [editPhoto, setEditPhoto] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const sessionUser = useSelector((state) => state.session.user);
  const currentPhoto = useSelector((state) => state.photo.currentPhoto);
  const photoComments = useSelector((state) => state.comments.photoComments);
  // const users = useSelector((state) => state.users)

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
    dispatch(commentActions.editComment(newComment)).then(() => {
      setEditComment(false);
      return setDescription("");
    });
  };

  const handleEditPhoto = (e) => {
    e.preventDefault();
    const newImage = {
      photo_url,
      id: photoId,
      title: newTitle,
      description: newDescription,
      userId: currentPhoto.userId,
      albumId: currentPhoto.albumId,
    };
    dispatch(photoActions.editPhoto(newImage)).then(() => {
      return setEditPhoto(false);
    });
  };

  let commentContent = null;

  if (editComment) {
    commentContent = (
      <div className={styles.commentTextArea}>
        <button type="button" onClick={() => setEditComment(false)}>
          Cancel Edit
        </button>
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
    commentContent = (
      <div>
        <div>
          {photoComments?.map((comment) => (
            <div>
              {commentContent}
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
                <button
                  className={`${styles.editBTN}`}
                  type="button"
                  onClick={() =>
                    dispatch(commentActions.deleteComment(comment.id))
                  }
                >
                  <i className="far fa-trash-alt"></i>
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

  let photoContent = null;

  if (editPhoto) {
    photoContent = (
      <div>
        <button type="button" onClick={() => setEditPhoto(false)}>
          Cancel Edit
        </button>
        <input
          type="text"
          value={newTitle}
          placeholder="Title"
          onChange={(e) => setNewTitle(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        ></input>
        <button
          type="button"
          onClick={handleEditPhoto}
          >Confirm edit</button>
      </div>
    );
  } else {
    photoContent = (
      <div>
        <div className={styles.title}>{title}</div>
        <button type="button" onClick={() => setEditPhoto(true)}>
          Edit
        </button>
        <p className={styles.imgdescription}>{imgdescription}</p>
      </div>
    );
  }

  useEffect(() => {
    setEditItemId(null);
    setEditComment(false);
    setEditPhoto(false);
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
          {photoContent}
          <p className={styles.title}>Comments</p>
          <div>{commentContent}</div>
        </div>
      </form>
    </div>
  );
}

export default ImageDetail;
