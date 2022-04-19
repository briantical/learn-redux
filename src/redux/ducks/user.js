export const GET_USER = "GET_USER";
export const SET_USER = "SET_USER";

export const getUser = () => ({ type: GET_USER });
export const setUser = (user) => ({ type: SET_USER, payload: user });

const initialState = {
  user: undefined,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default reducer;
