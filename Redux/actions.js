export const SET_LIKE = "SET_LIKE";

export const setLike = (id) => (dispatch) => {
  dispatch({
    type: SET_LIKE,
    payload: id,
  });
};
