import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPhotos } from '../../store/photos';

function PhotoBrowser() {
  const dispatch = useDispatch();

  const photo = useSelector(state => {
    console.log(state.photo)
    // return state.photo.list.map(photoId => state.photo[photoId])
  })

  useEffect(() => {
    dispatch(getPhotos())
  }, [dispatch])

  return (
    <div>
      <h1>Explore</h1>
    </div>
  )
}

export default PhotoBrowser
