import { fetch } from "./csrf";

const ADD_OUTFIT = "outfit/ADD_OUTFIT";

const addOutfit = (payload) => ({
  type: ADD_OUTFIT,
  payload
});

export const createOutfit = (outfit) => async (dispatch) => {
  const res = await fetch(`/api/outfits/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(outfit)
  });

  dispatch(addOutfit(res.data))

  console.log("hi there", outfit)
}

function reducer(state={}, action) {
  let newState;
  switch (action.type) {
    case ADD_OUTFIT:
      newState = {...action.payload};
      return newState;
    default:
      return state;
  }
}

export default reducer;
