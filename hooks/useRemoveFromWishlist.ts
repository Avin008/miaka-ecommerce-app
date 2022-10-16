import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromWishlist } from "../services/firebaseFunc";
import { ProductData } from "../types";

const useRemoveFromWishlist = (
  productData: ProductData,
  userID: string | undefined
) => {
  const queryClient = useQueryClient();

  const {
    mutate: removeFromWishlistFunc,
    isLoading: isRemoveFromWishlistLoading,
    isError: isRemoveFromWishlistError,
  } = useMutation(
    async () => {
      return removeFromWishlist(userID!, productData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user"]);
      },
    }
  );

  return {
    removeFromWishlistFunc,
    isRemoveFromWishlistLoading,
    isRemoveFromWishlistError,
  };
};

export default useRemoveFromWishlist;
