import { fetch } from "./csrf";

const ADD_OUTFIT = "outfit/ADD_OUTFIT";
const GET_OUTFITS = "outfit/GET_OUTFITS";
const DELETE_OUTFIT = "outfit/DELETE_OUTFIT";

const addOutfit = (payload) => ({
  type: ADD_OUTFIT,
  payload
});

const allOutfits = (payload) => ({
  type: GET_OUTFITS,
  payload
});

const deletedOutfitList = (payload) => ({
  type: DELETE_OUTFIT,
  payload
});

export const createOutfit = (outfit) => async (dispatch) => {
  const res = await fetch(`/api/outfits/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(outfit)
  });
  dispatch(addOutfit(res.data));
};

export const getAllOutfits = (userId) => async (dispatch) => {
  const res = await fetch(`/api/outfits/${userId}`);

  dispatch(allOutfits(res.data));
};

export const deleteOutfit = (outfit) => async (dispatch) => {
  await fetch(`/api/outfits/${outfit.id}/delete`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(outfit)
  });
  const currentList = await fetch(`/api/outfits/${outfit.userId}`);
  dispatch(deletedOutfitList(currentList.data));

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
    case DELETE_OUTFIT:
      newState = { ...action.payload };
      return newState;
    default:
      return state;
  }
}

export default reducer;
