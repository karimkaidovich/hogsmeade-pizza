import { IcartPizza } from "../features/cartSlice";

export const calcTotalPrice = (items: IcartPizza[]) => {
  return items.reduce((sum, item) => {
    return sum + item.price;
  }, 0);
};
