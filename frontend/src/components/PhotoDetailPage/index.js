import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getImageDetail } from "../../store/photos";
import Image from './Image'
import ImageDetail from './ImageDetail'


function PhotoDetailPage() {
  const dispatch = useDispatch();

  const {photoId} = useParams();

  const photo = useSelector((state) => state.photo.currentPhoto);

  useEffect(() => {
    dispatch(getImageDetail(photoId));
  }, [dispatch]);

  return (
    <div>
      <Image src={photo?.photo_url} alt={photo?.title}/>
      <ImageDetail userId={photo?.userId} title={photo?.title} description={photo?.description}/>
    </div>
  )
}

export default PhotoDetailPage
