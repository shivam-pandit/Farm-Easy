import {
  ADD_ITEM,
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  MOVE_TO_CART,
  REMOVE_FROM_CART,
  SUBTRACT_ITEM,
} from "./constants";

export const addCreator = (id) => {
  return {
    type: ADD_TO_CART,
    payload: id,
  };
};

export const removeCreator = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const moveToWishlist = (id) => {
  return {
    type: MOVE_TO_CART,
    payload: id,
  };
};

export const addToWishlistCreator = (id) => {
  return {
    type: ADD_TO_WISHLIST,
    payload: id,
  };
};

export const increaseItem = (id) => {
  return {
    type: ADD_ITEM,
    payload: id,
  };
};

export const decreaseItem = (id) => {
  return {
    type: SUBTRACT_ITEM,
    payload: id,
  };
};


