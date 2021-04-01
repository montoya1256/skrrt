import { csrfFetch } from "./csrf";

const SET_IMAGE = "photos/setImage";
const LOAD = "photos/loadPhotos";
const FIND_ONE = "photos/FindOne";
const UPDATE_IMAGE = "photos/Update";
const REMOVE_IMAGE = "photos/Remove";

const setImage = (image) => ({
  type: SET_IMAGE,
  payLoad: image,
});

const load = (list) => ({
  type: LOAD,
  list,
});

const findImage = (image) => ({
  type: FIND_ONE,
  image,
});


const remove = (id) => ({
  type: REMOVE_IMAGE,
  id,
});

export const editPhoto = (image) => async (dispatch) => {
  const { id, description, title, userId, albumId } = image;
  const res = await csrfFetch(`/api/photos/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ id, description, title, userId, albumId }),
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    const updatedImage = await res.json();
    dispatch(findImage(updatedImage, id));
    return updatedImage;
  }
};


export const deleteImage = imageId => async dispatch => {
  const res = await csrfFetch(`/api/photos/${imageId}`, {
    method: 'delete'
  })
  if (res.ok) {
    dispatch(remove(imageId))
  }
}

export const getImageDetail = (photoId) => async (dispatch) => {
  const response = await csrfFetch(`/api/photos/${photoId}`);
  if (response.ok) {
    const detail = await response.json();
    dispatch(findImage(detail));
  }
};

export const createImage = (newImage) => async (dispatch) => {
  const { images, image, title, description, userId, albumId } = newImage;
  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("userId", userId);
  formData.append("albumId", albumId);

  // for multiple files
  if (images && images.length !== 0) {
    for (var i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
  }

  // for single file
  if (image) formData.append("image", image);

  const res = await csrfFetch(`/api/photos/`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });

  const data = await res.json();
  console.log("data.newImage", data.carImage);
  dispatch(setImage(data.carImage));
};

export const getPhotos = () => async (dispatch) => {
  const res = await fetch("/api/photos/");
  if (res.ok) {
    const list = await res.json();
    dispatch(load(list));
  }
};

const imageReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD: {
      const allPhotos = {};
      action.list.forEach((photo) => {
        allPhotos[photo.id] = photo;
      });
      return {
        ...allPhotos,
        ...state,
        list: action.list,
      };
    }
    case FIND_ONE: {
      const newState = { ...state, ["currentPhoto"]: action.image };
      return newState;
    }
    case SET_IMAGE:
      return { ...state, image: action.payLoad };
    case REMOVE_IMAGE:
      let rmvid = action.id;
      const newState = {...state};
      delete newState[rmvid]
      return newState
    default:
      return state;
  }
};

export default imageReducer;
