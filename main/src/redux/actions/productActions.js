import fakeStoreapi from "../../apis/fakeStoreapi";
import { ActionTypes } from "../constants/actionTypes";
const fetchProducts = () => async (dispatch) => {
  const response = await fakeStoreapi.get(`/products`);
  console.log(response);
  dispatch(
    // type: ActionTypes.SET_PRODUCTS,
    // payload: response.data,
    setProducts(response.data)
  );
};

const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

const fetchSingledata = (id) => async (dispatch) => {
  const response = await fakeStoreapi.get(`/products/${id}`);
  console.log(response);
  console.log(id);
  dispatch(selectedProduct(response.data));
};
export {
  setProducts,
  fetchProducts,
  selectedProduct,
  removeSelectedProduct,
  fetchSingledata,
};
