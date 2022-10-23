import { ProductData } from "../types";

const calculateTotalPrice = (cart: ProductData[]) => {
  return cart.reduce(
    (acc, val) => {
      return {
        ...acc,
        price: acc.price + val.price * val.qty,
      };
    },
    { price: 0, deliveryCharge: 40 }
  );
};

export default calculateTotalPrice;
