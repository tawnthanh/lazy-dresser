import { fetch } from "./csrf";

const GRAB_FIXED = "items/GRAB_FIXED";
const ADD_ITEM = "items/ADD_ITEM";

const setFixedItems = (payload) => ({
  type: GRAB_FIXED,
  payload
});

const addItem = (payload) => ({
  type: ADD_ITEM,
  payload
});

export const grabFixedFields = () => async (dispatch) => {
  const res = await fetch("/api/items/fixed-fields");
  dispatch(setFixedItems(res.data));
  return res;
}

export const createItem = (item) => async (dispatch) => {
  const { title, description, image, primaryColor, secondaryColor, itemTypeId, fitId, userId, occasionId } = item;
  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("image", image);
  formData.append("primaryColor", primaryColor);
  formData.append("secondaryColor", secondaryColor);
  formData.append("itemTypeId", itemTypeId);
  formData.append("fitId", fitId);
  formData.append("userId", userId);
  formData.append("occasionId", occasionId);

  const res = await fetch(`/api/items/create`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });

  const data = await res.json();

  dispatch(addItem(data.item));
  return item;
}
function reducer(state={}, action) {
  let newState;
  switch (action.type) {
    case GRAB_FIXED:
      newState = {...action.payload};
      return newState;
    case ADD_ITEM:
      newState = { "added": { ...action.payload } };
      return newState;
    default:
      return state;
  }
}

export default reducer;
