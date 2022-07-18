import { createSlice } from "@reduxjs/toolkit";
import { getCartFromLS } from "../utils/getCartFromLS";

export interface IcartPizza {
  id: number;
  imageUrl: string;
  price: number;
  size: string;
  title: string;
  type: string;
}

interface IcartSlice {
  cartItems: IcartPizza[];
  cartTotalCount: number;
  cartTotalPrice: number;
}

const { cartItems, cartTotalPrice, cartTotalCount } = getCartFromLS();

const initialState: IcartSlice = {
  cartItems,
  cartTotalCount,
  cartTotalPrice,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem(state, action) {
      state.cartItems.push(action.payload);
      state.cartTotalPrice += action.payload.price;
      state.cartTotalCount += 1;
    },
    removeCartItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id,
      );
      state.cartTotalPrice -= action.payload.price;
      state.cartTotalCount -= 1;
    },
    clearCart(state) {
      state.cartItems = [];
      state.cartTotalPrice = 0;
      state.cartTotalCount = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCartItem, removeCartItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
