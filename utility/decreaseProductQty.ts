import { ProductData } from "../types";

const decreaseProductQty = (cart: ProductData[], productID: string) =>
  cart.map((x) => {
    if (x.id === productID) {
      return {
        ...x,
        qty: x.qty - 1,
      };
    } else {
      return x;
    }
  });

export default decreaseProductQty;
