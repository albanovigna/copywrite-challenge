import { GET_TEXT } from "../actions";

const initialState = {
  texts: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEXT:
      return { ...state, texts: state.texts.concat(action.info) };
    default:
      return state;
  }
};

export default rootReducer;
