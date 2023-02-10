import { useEffect } from "react";
import { useUserStore } from "../lib/store";
import { UserData } from "../types";

const useGetCartAndWishlist = (
  userData: UserData,
  userDataLoading: boolean
) => {
  const addToWishlist = useUserStore(
    (store) => store.addToWishlist
  );
  const addToCart = useUserStore(
    (store) => store.addToCart
  );
  useEffect(() => {
    if (!userDataLoading && userData) {
      addToWishlist(userData.wishlist);
      addToCart(userData.cart);
    }
  }, [userData]);
};

export default useGetCartAndWishlist;
