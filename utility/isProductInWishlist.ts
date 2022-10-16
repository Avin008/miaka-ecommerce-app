import { isProductInWishlist } from "../types";

const isProductInWishlist = ({
  userData,
  productData,
}: isProductInWishlist): boolean =>
  userData?.wishlist.find(
    (wishlistProduct) => wishlistProduct.id === productData.id
  )
    ? true
    : false;

export default isProductInWishlist;
