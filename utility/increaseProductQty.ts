import { ProductData } from "../types";

const increaseProductQty = (cart: ProductData[], productID: string) =>
  cart.map((x) => {
    if (x.id === productID) {
      return {
        ...x,
        qty: x.qty + 1,
      };
    } else {
      return x;
    }
  });

export default increaseProductQty;
