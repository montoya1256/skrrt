import { csrfFetch } from "./csrf";

const LOAD = "tags/load";

const load = list => ({
  type: LOAD,
  list
});

export const getTagNames = () => async dispactch => {
  const res = await csrfFetch("/api/tags");
  if (res.ok) {
    const list = await res.json();
    dispactch(load(list))
  }
}

const tagReducer = (state ={}, action) => {
  switch (action.type) {
    case LOAD:
      const tagNames = {...state};
      tagNames["TagNames"] = action.list;
      return tagNames;
    default:
      return state;
  }
}

export default tagReducer
