import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '~/modules';

import { ICartState } from './type';

const initialState: ICartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<{ cart: ICart }>) => {
      const index = state.cart.findIndex(
        (c) => c.id === action.payload.cart.id
      );

      if (index >= 0) {
        state.cart[index] = action.payload.cart;
      } else {
        state.cart.push(action.payload.cart);
      }
    },
    remove: (state, action: PayloadAction<{ id: string }>) => {
      state.cart = state.cart.filter((c) => c.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  remove: removeFromCart,
  toggle: toggleCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
