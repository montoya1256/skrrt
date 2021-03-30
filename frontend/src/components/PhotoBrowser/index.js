import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPhotos } from '../../store/photos';

function PhotoBrowser() {
  const dispatch = useDispatch();

  const photoUrl = useSelector(state => {
    // console.log(state.photo.list)
    return state.photo.list?.map(photo => <img src={photo.photo_url} alt={photo.title}></img>)
    // return state.photo.list.map(photoId => state.photo[photoId])
  })

  useEffect(() => {
    dispatch(getPhotos())
  }, [dispatch])

  return (
    <div>
      <h1>Explore</h1>
      <div>
        <div>{photoUrl}</div>
      </div>
    </div>
  )
}

export default PhotoBrowser
