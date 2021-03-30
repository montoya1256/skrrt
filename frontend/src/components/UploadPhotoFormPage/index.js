import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import * as photoActions from "../../store/photos";
import styles from "./uploadImageForm.module.css";

function UploadPhotoFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory()

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
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
        // this needs to change to make it for a specific album
        albumId: sessionUser.id
      })
    )
      .then(() => {
        setTitle("");
        setDescription("");
        setImage(null);
        setFile(null)
        history.push('/explore')
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
    setFile(URL.createObjectURL(e.target.files[0]));
    setTitle(e.target.files[0].name);
  };

  const hiddenFileInput = React.useRef(null);

  const defaultBtnActive = () => {
    hiddenFileInput.current.click();
  };

  const cancelUpload = () => {
    setImage(null);
    setFile(null);
    setTitle("");
    setDescription("");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li className="error-msg" key={idx}>
              {error}
            </li>
          ))}
        </ul>
        <div className={`${styles.wrapper} ${image ? styles.active : ""}`}>
          <div className={styles.image}>
            <img src={file} alt=""></img>
          </div>
          <div className="content">
            <div className={styles.icon}>
              <i className="fas fa-cloud-upload-alt"></i>
            </div>
            <div className={styles.text}>No file chosen, yet!</div>
          </div>
          <div className={styles.cancel_btn} onClick={cancelUpload}>
            <i className="fas fa-times"></i>
          </div>
          <input
            className={styles.file_name}
            placeholder="TITLE"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <textarea
            className={styles.text_area}
            placeholder="DESCRIPTION"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <input
          className={styles.default_btn}
          type="file"
          onChange={updateFile}
          ref={hiddenFileInput}
        ></input>
        <button type="submit" className={`${styles.upload_btn} ${image ? styles.upload : ''}`}>Upload Picture</button>
      </form>
      <button onClick={defaultBtnActive} className={styles.custom_btn}>
        Choose a file
      </button>
    </div>
  );
}

export default UploadPhotoFormPage;
