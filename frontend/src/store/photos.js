import { csrfFetch } from "./csrf";

const SET_IMAGE = "photos/setImage";
const LOAD = "photos/loadPhotos";

const setImage = (image) => ({
  type: SET_IMAGE,
  payLoad: image,
});

const load = (list) => ({
  type: LOAD,
  list,
});

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
  const res = await fetch('/api/photos/');
  if(res.ok) {
    const list = await res.json();
    dispatch(load(list))
  }
};

const imageReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD: {
      const allPhotos = {};
      action.list.forEach(photo => {
        allPhotos[photo.id] = photo;
      });
      return {
        ...allPhotos,
        ...state,
        list: action.list
      }
    }
    case SET_IMAGE:
      return { ...state, image: action.payLoad };
    default:
      return state;
  }
};

export default imageReducer;
