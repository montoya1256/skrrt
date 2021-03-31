import { csrfFetch } from "./csrf";

const FIND_ALL = "users/FindAll";

const findAllUsers = usersList => ({
  type: FIND_ALL,
  usersList
})

export const getAllUsers = () => async dispatch => {
  const res = await csrfFetch('/api/users/');
  if(res.ok) {
    const users = await res.json();
    dispatch(findAllUsers(users))
  }
}

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case FIND_ALL: {
      const allUsers = {};
      action.usersList.forEach(user => {
        allUsers[user.id] = user;
      })
      return {
        ...allUsers,
        ...state,
        allUsers: action.allUsers
      }
    }
    default:
      return state;
  }
}

export default userReducer;
