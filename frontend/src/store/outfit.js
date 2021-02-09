import { fetch } from "./csrf";

const ADD_OUTFIT = "outfit/ADD_OUTFIT";
const GET_OUTFITS = "outfit/GET_OUTFITS";

const addOutfit = (payload) => ({
  type: ADD_OUTFIT,
  payload
});

const allOutfits = (payload) => ({
  type: GET_OUTFITS,
  payload
});

export const createOutfit = (outfit) => async (dispatch) => {
  const res = await fetch(`/api/outfits/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(outfit)
  });
  dispatch(addOutfit(res.data))
};

export const getAllOutfits = (userId) => async (dispatch) => {
  const res = await fetch(`/api/outfits/${userId}`);

  dispatch(allOutfits(res.data))
}

function reducer(state={}, action) {
  let newState;
  switch (action.type) {
    case ADD_OUTFIT:
      newState = {...action.payload};
      return newState;
    case GET_OUTFITS:
      newState = { ...action.payload };
      return newState;
    default:
      return state;
  }
}

export default reducer;
