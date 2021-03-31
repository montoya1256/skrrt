import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { getImageDetail, getPhotos } from "../../store/photos";
import Image from './Image'
import ImageDetail from './ImageDetail'


function PhotoDetailPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {photoId} = useParams();

  const photos = useSelector((state) => {
    return state.photo.list?.map((photo) => photo);
  });

  const photo = useSelector((state) => state.photo.currentPhoto);

  const nextPhoto = photos?.find(pic => pic?.id > photo?.id )
  const prevPhoto = photos?.find(pic => pic?.id < photo?.id )
  // prevPhotoId={prevPhoto?.id}
  // const goBack = () => {
  //   history.goBack()
  // }
  // goBack={goBack}

  useEffect(() => {
    dispatch(getImageDetail(photoId));
    dispatch(getPhotos());
  }, [dispatch, photoId]);

  return (
    <div>
      <Image src={photo?.photo_url} alt={photo?.title} nextPhotoId={nextPhoto?.id} prevPhotoId={prevPhoto?.id}/>
      <ImageDetail userId={photo?.userId} title={photo?.title} description={photo?.description}/>
    </div>
  )
}

export default PhotoDetailPage
