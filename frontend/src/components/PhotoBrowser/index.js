import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "../../store/photos";
import Image from "./image";
import styles from "./PhotoBrowser.module.css";
import Pagination from "./Pagination";

function PhotoBrowser() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  const photos = useSelector((state) => {
    return state.photo.list?.map((photo) => photo);
  });

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = photos?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className={styles.wrapperImage}>
        {currentPosts?.map((photo) => (
          <Image src={photo.photo_url} alt={photo.title} key={photo.id} />
        ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={photos?.length}
        paginate={paginate}
      />
    </div>
  );
}

export default PhotoBrowser;
