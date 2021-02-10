import { fetch } from "./csrf";

const GRAB_FIXED = "items/GRAB_FIXED";
const ADD_ITEM = "items/ADD_ITEM";
const GET_ITEMS_LIST = "items/GET_ITEMS_LIST";
const DELETE_ITEM = "items/DELETE_ITEM";
const GET_SINGLE_ITEM = "items/GET_SINGLE_ITEM";

const setFixedItems = (payload) => ({
  type: GRAB_FIXED,
  payload
});

const addItem = (payload) => ({
  type: ADD_ITEM,
  payload
});

const getItemsList = (payload) => ({
  type: GET_ITEMS_LIST,
  payload
});

const deleteItem = (payload) => ({
  type: DELETE_ITEM,
  payload
});

const singleItem = (payload) => ({
  type: GET_SINGLE_ITEM,
  payload
})

export const grabFixedFields = () => async (dispatch) => {
  const res = await fetch("/api/items/fixed-fields");
  dispatch(setFixedItems(res.data));
  return res;
};

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

  dispatch(addItem(res.data));
  return item;
};

export const getAllItems = (userId) => async (dispatch) => {
  const res = await fetch(`/api/items/${userId}/item-inventory`);
  dispatch(getItemsList(res.data));
  return res;
};

export const deleteSingleItem = (item) => async (dispatch) => {
  const res = await fetch(`/api/items/${item.id}/delete`, {
    method: 'DELETE',
    body: JSON.stringify(item)
  })
  dispatch(deleteItem(res.data));
  return res;
};

export const getSingleItem = (itemId) => async (dispatch) => {
  const res = await fetch(`/api/items/${itemId}`)
  const fixed = await fetch("/api/items/fixed-fields");
  dispatch(singleItem({...res.data,...fixed.data}));
  return res;
};

function reducer(state={}, action) {
  let newState;
  switch (action.type) {
    case GRAB_FIXED:
      newState = {...action.payload};
      return newState;
    case ADD_ITEM:
      newState = { "added": { ...action.payload } };
      return newState;
    case GET_ITEMS_LIST:
      newState = { ...action.payload };
      return newState;
    case DELETE_ITEM:
      newState = { ...action.payload };
      return newState;
    case GET_SINGLE_ITEM:
      newState = { ...action.payload };
      return newState;
    default:
      return state;
  }
}

export default reducer;
