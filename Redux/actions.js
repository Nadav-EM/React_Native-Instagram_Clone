export const SET_LIKE = "SET_LIKE";
export const SET_IS_LIKED = "SET_IS_LIKED";

export const setLike = (id) => (dispatch) => {
  dispatch({
    type: SET_LIKE,
    payload: id,
  });
};
