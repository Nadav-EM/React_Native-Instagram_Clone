import { SET_LIKE } from "../Redux/actions";
import Users from "../userDate";

const init = {
  users: Users,
};

function userReducer(state = init, action) {
  switch (action.type) {
    case SET_LIKE:
      let stateCopy = { ...state };
      let userObj = stateCopy.users.filter((u) => u.id == action.payload)[0];
      !userObj.isLiked ? userObj.likes++ : userObj.likes--;
      userObj.isLiked = !userObj.isLiked;
      return { ...state, ...stateCopy };
    default:
      return state;
  }
}

export default userReducer;
