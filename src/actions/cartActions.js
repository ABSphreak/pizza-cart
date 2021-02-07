import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const addToCart = (id, qty, size, toppingsParam) => async (
  dispatch,
  getState
) => {
  // Getting data from API for adding to Cart
  const { data } = await axios.get(
    `https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68/`
  );

  const selectedData = await data.filter((d) => d.id === +id);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: selectedData[0].id,
      name: selectedData[0].name,
      img_url: selectedData[0].img_url,
      price: selectedData[0].price,
      isVeg: selectedData[0].isVeg,
      qty,
      size,
      toppingsParam,
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
