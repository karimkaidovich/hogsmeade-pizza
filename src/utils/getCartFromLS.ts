import { calcTotalPrice } from "./calcTotalPrice";

export const getCartFromLS = () => {
  const data = localStorage.getItem("cart");
  const cartItems = data ? JSON.parse(data) : [];
  const cartTotalPrice = calcTotalPrice(cartItems);
  const cartTotalCount = cartItems.length;
  return {
    cartItems,
    cartTotalPrice,
    cartTotalCount,
  };
};
