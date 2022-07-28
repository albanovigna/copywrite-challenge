import axios from "axios";

export const GET_TEXT = "GET_TEXT";

export const getText = (payload) => {
  return async (dispatch) => {
    const result = await axios.get(`/iecho?text=${payload}`);
    dispatch({ type: GET_TEXT, info: result.data });
  };
};
