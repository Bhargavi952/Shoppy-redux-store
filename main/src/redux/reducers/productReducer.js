import { ActionTypes } from "../constants/actionTypes";
const intialState = {
  products: [{
      id:1,
      title:"bax",
      category:"developer"
  }],
};

export const productsReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.SET_PRODUCTS:
        return state 
      default:
        return state;
    }
  };