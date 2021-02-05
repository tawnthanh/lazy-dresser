import { fetch } from "./csrf";

const GRAB_FIXED = "items/GRAB_FIXED";

const setFixedItems = (payload) => ({
  type: GRAB_FIXED,
  payload
});


export const grabFixedFields = () => async (dispatch) => {
  const res = await fetch("/api/items/fixed-fields");
  dispatch(setFixedItems(res.data));
  return res;
}


function reducer(state={}, action) {
  let newState;
  switch (action.type) {
    case GRAB_FIXED:
      newState = {...action.payload};
      return newState;
    default:
      return state;
  }
}

export default reducer;
