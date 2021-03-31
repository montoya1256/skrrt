import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import * as commentActions from "../../store/comments";
import styles from "./PhotoDetail.module.css";

function ImageDetail({handleEdit, title, imgdescription}) {
  const dispatch = useDispatch();
  const { photoId } = useParams();

  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);

  const sessionUser = useSelector((state) => state.session.user);
  const currentPhoto = useSelector((state) => state.photo.currentPhoto);
  const photoComments = useSelector((state) => state.comments.photoComments);

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


  useEffect(() => {
    // dispatch(commentActions.getAllComments());
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
          <div>
            <ul>
              {photoComments?.map((comment) => (
                <div>
                  <li key={comment.id}>{comment.description}</li>
                  <button id={`${comment.id}`} type='button' onClick={handleEdit}>edit</button>
                </div>
              ))}
            </ul>
          </div>
          <div>
            <textarea
              placholder="Add a comment"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Comment</button>
        </div>
      </form>
    </div>
  );
}

export default ImageDetail;
