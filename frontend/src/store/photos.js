import { csrfFetch } from "./csrf";

const SET_IMAGE = "photos/setImage";

const setImage = (image) => ({
  type: SET_IMAGE,
  payLoad: image,
});

export const createImage = (newImage) => async (dispatch) => {
  const { images, image, title, description, userId } = newImage;
  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("userId", userId);

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
  console.log('data.newImage', data.carImage)
  dispatch(setImage(data.carImage));
};

const imageReducer = (state={}, action) => {
  switch(action.type) {
    case SET_IMAGE:
      return {...state, image: action.payLoad}
    default:
      return state
  }
}

export default imageReducer;
