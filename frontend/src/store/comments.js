import { csrfFetch } from "./csrf";

const MAKE_COMMENT = "comments/makeComment";
const LOAD = "comments/loadComments";
const LOAD_COMMENTS = "comments/LoadComments";
const UPDATE_ITEM = "comments/Update";
const REMOVE_COMMENT = "comments/Remove";

const makeComment = (list) => ({
  type: MAKE_COMMENT,
  list,
});

const load = (comments) => ({
  type: LOAD,
  comments,
});

const loadPhotoComments = (items, photoId) => ({
  type: LOAD_COMMENTS,
  items,
  photoId,
});

const update = (comment) => ({
  type: UPDATE_ITEM,
  comment,
});

const remove = (id) => ({
  type: REMOVE_COMMENT,
  id,
});

export const deleteComment = (commentId) => async (dispatch) => {
  const res = await csrfFetch(`/api/comments/${commentId}`, {
    method: "delete",
  });
  if (res.ok) {
    dispatch(remove(commentId));
  }
};

export const createComment = (newComment) => async (dispatch) => {
  const { description, userId, photoId } = newComment;

  const res = await csrfFetch(`/api/comments/`, {
    method: "POST",
    Headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description,
      userId,
      photoId,
    }),
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(makeComment(data.comment));
    return data;
  }
};

export const getAllComments = () => async (dispacth) => {
  const res = await csrfFetch("/api/comments/");
  if (res.ok) {
    const comments = await res.json();
    dispacth(load(comments));
  }
};

export const getComments = (photoId) => async (dispacth) => {
  const res = await csrfFetch(`/api/comments/photos/${photoId}`);
  if (res.ok) {
    const items = await res.json();
    dispacth(loadPhotoComments(items, photoId));
  }
};

export const editComment = (comment) => async (dispatch) => {
  const { id, description, userId, photoId } = comment;
  const res = await csrfFetch(`/api/comments/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ id, description, userId, photoId }),
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    const updatedComment = await res.json();
    dispatch(update(updatedComment));
    return updatedComment;
  }
};

const commentReducer = (state = {}, action) => {
  switch (action.type) {
    case MAKE_COMMENT:
      const allComments = { ...state };
      allComments["photoComments"] = [...state.photoComments, action.list];
      return allComments;
    case LOAD:
      const findComments = { ...state };
      findComments["comments"] = action.comments;
      return findComments;
    case LOAD_COMMENTS:
      const newComments = { ...state };
      newComments["photoComments"] = action.items;
      return newComments;
    case UPDATE_ITEM:
      const updatedComment = { ...state };
      let needtoUpdateComment = updatedComment.photoComments.map((comment) => {
        return comment.id === action.comment.id ? action.comment : comment;
      });
      updatedComment["photoComments"] = needtoUpdateComment;
      return updatedComment;
    case REMOVE_COMMENT:
      let rmvid = action.id;
      const newState = { ...state };
      const newArr = newState.photoComments.filter(
        (comment) => comment.id !== rmvid
      );
      newState.photoComments = newArr;
      return newState;
    default:
      return state;
  }
};

export default commentReducer;
