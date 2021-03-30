import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as photoActions from "../../store/photos";

function UploadPhotoFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    let newErrors = [];
    e.preventDefault();
    dispatch(
      photoActions.createImage({
        title,
        description,
        image,
        userId: sessionUser.id,
      }))
      .then(() => {
        setTitle("");
        setDescription("");
        setImage(null);
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          newErrors = data.errors;
          setErrors(newErrors);
        }
      });
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  return (
    <div className="center">
      <h1>Choose Photos to Upload</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li className="error-msg" key={idx}>
              {error}
            </li>
          ))}
        </ul>
        <div className="photo_url-field">
          <input type="file" onChange={updateFile} />
          <label>Import a photo here</label>
        </div>
        <div className="image-field">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Title</label>
        </div>
        <div className="image-field">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>Description</label>
        </div>
        <button type="submit">Upload Photo</button>
      </form>
    </div>
  );
}

export default UploadPhotoFormPage;
