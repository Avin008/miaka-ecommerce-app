import { ProductData } from "../types";

const calculateTotalPrice = (
  cart: ProductData[]
) => {
  return cart.reduce(
    (acc, val) => {
      return {
        ...acc,
        price: acc.price + val.price * val.qty,
        discountedPrice:
          acc.discountedPrice +
          val.discountedPrice * val.qty,
      };
    },
    {
      price: 0,
      discountedPrice: 0,
      deliveryCharge: 40,
    }
  );
};

export default calculateTotalPrice;
