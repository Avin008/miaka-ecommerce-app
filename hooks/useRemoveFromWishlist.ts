import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromWishlist } from "../services";
import { ProductData } from "../types";
import { toast } from "react-hot-toast";

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
        toast.success("product removed from wishlist!", {
          position: "bottom-center",
        });
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
