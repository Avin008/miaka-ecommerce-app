import { ProductData, UserData } from "../types/types";

const isProductInCart = (
  productData: ProductData,
  userData: UserData | undefined
): boolean =>
  userData?.cart.find((cartItem) => cartItem.id === productData.id)
    ? true
    : false;

export default isProductInCart;
