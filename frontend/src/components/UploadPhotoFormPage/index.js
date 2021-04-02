import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as photoActions from "../../store/photos";
import * as tagActions from "../../store/tags";
import styles from "./uploadImageForm.module.css";
// import Select from "react-select";

function UploadPhotoFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);
  const tagNamesArr = useSelector((state) => state.tags.TagNames);

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [display, setDisplay] = useState(null);
  const [errors, setErrors] = useState([]);
  const [selectedTagId, setSelectedTagId] = useState(null);

  console.log('selectedTagId',selectedTagId)

  const handleSubmit = (e) => {
    let newErrors = [];
    e.preventDefault();
    dispatch(
      photoActions.createImage({
        title,
        description,
        image,
        userId: sessionUser.id,
        albumId: sessionUser.id,
        tagNameId: selectedTagId
      })
    )
      .then(() => {
        setTitle("");
        setDescription("");
        setImage(null);
        setDisplay(null);
        history.push("/explore");
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          newErrors = data.errors;
          setErrors(newErrors);
        }
      });
  };

  useEffect(() => {
    dispatch(tagActions.getTagNames());
  }, [dispatch]);

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
    setDisplay(URL.createObjectURL(e.target.files[0]));
    setTitle(e.target.files[0].name);
  };

  const hiddenFileInput = React.useRef(null);

  const defaultBtnActive = () => {
    hiddenFileInput.current.click();
  };

  const cancelUpload = () => {
    setImage(null);
    setDisplay(null);
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
            <img src={display} alt=""></img>
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
        <button
          type="submit"
          className={`${styles.upload_btn} ${image ? styles.upload : ""}`}
        >
          Upload Picture
        </button>
      </form>
      <button onClick={defaultBtnActive} className={styles.custom_btn}>
        Choose a file
      </button>
      <select
        value={selectedTagId}
        onChange={(e) => setSelectedTagId(e.target.value)}
      >
        {" "}
        {tagNamesArr?.map((tagName) => (
          <option value={tagName.id}>{tagName.title}</option>
        ))}
      </select>
    </div>
  );
}


export default UploadPhotoFormPage;
