import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getImageDetail, getPhotos } from "../../store/photos";
// import { getAllUsers } from "../../store/user";
import Image from "./Image";
import ImageDetail from "./ImageDetail";

function PhotoDetailPage() {
  const dispatch = useDispatch();
  const { photoId } = useParams();

  const photos = useSelector((state) => {
    return state.photo.list?.map((photo) => photo);
  });
  const photo = useSelector((state) => state.photo.currentPhoto);

  const nextPhoto = photos?.find((pic) => pic?.id > photo?.id);

  const handleEdit = e => {
    e.preventDefault();
    console.log(e.target.id)
  }

  useEffect(() => {
    dispatch(getImageDetail(photoId));
    dispatch(getPhotos());
    // dispatch(getAllUsers());
  }, [dispatch, photoId]);

  return (
    <div>
      <Image
        src={photo?.photo_url}
        alt={photo?.title}
        nextPhotoId={nextPhoto?.id}
      />
      <ImageDetail
        userId={photo?.userId}
        title={photo?.title}
        imgdescription={photo?.description}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default PhotoDetailPage;
