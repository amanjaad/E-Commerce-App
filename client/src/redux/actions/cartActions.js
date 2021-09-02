import axios from "axios";
import * as actionTypes from "../constants/cartConstant";

const Url = "http://localhost:8000";
export const addToCart = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${Url}/product/${id}`);
    dispatch({ type: actionTypes.ADD_TO_CART, payload: data });
  } catch (error) {
    console.log("Error While Calling add to cart Api");
  }
};

export const removeFromCart = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id });
};
