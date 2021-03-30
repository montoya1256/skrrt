import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as photoActions from "../../store/photos";
import styles from "./uploadImageForm.module.css";

function UploadPhotoFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

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
      })
    )
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
    setTitle('')
    setDescription('')
  }


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
        </div>
        <input
          className={styles.default_btn}
          type="file"
          onChange={updateFile}
          ref={hiddenFileInput}
        ></input>
        <button type="submit">Upload Picture</button>
      </form>
        <button onClick={defaultBtnActive} className={styles.custom_btn}>
          Choose a file
        </button>
    </div>
  );

  // return (
  //   <div className="center">
  //     <h1>Choose Photos to Upload</h1>
  //     <form onSubmit={handleSubmit}>
  //       <ul>
  //         {errors.map((error, idx) => (
  //           <li className="error-msg" key={idx}>
  //             {error}
  //           </li>
  //         ))}
  //       </ul>
  //       <div className="photo_url-field">
  //         <input type="file" onChange={updateFile} />
  //         <label>Import a photo here</label>
  //       </div>
  //       <div className="image-field">
  //         <input
  //           type="text"
  //           value={title}
  //           onChange={(e) => setTitle(e.target.value)}
  //         />
  //         <label>Title</label>
  //       </div>
  //       <div className="image-field">
  //         <textarea
  //           value={description}
  //           onChange={(e) => setDescription(e.target.value)}
  //         />
  //         <label>Description</label>
  //       </div>
  //       <button type="submit">Upload Photo</button>
  //     </form>
  //   </div>
  // );
}

export default UploadPhotoFormPage;
