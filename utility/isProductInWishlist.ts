import { IsProductInWishlist } from "../types";

const isProductInWishlist = ({
  userData,
  productData,
}: IsProductInWishlist): boolean =>
  userData?.wishlist.find(
    (wishlistProduct) => wishlistProduct.id === productData.id
  )
    ? true
    : false;

export default isProductInWishlist;
