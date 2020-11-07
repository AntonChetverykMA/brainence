import * as types from './products.types';

export const addProduct = (payload) => ({
  type: types.ADD_PRODUCT,
  payload,
});

export const deleteProduct = (payload) => ({
  type: types.DELETE_PRODUCT,
  payload,
});
