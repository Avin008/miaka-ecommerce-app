import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToWishlist } from "../services";
import { ProductData } from "../types";
import { toast } from "react-hot-toast";

const useAddToWishlist = (
  productData: ProductData,
  userID: string | undefined
) => {
  const queryClient = useQueryClient();

  const {
    mutate: addToWishlistFunc,
    isLoading: isAddToWishlistLoading,
    isError: isAddToWishlistError,
  } = useMutation(
    async () => {
      return addToWishlist(userID!, productData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user"]);
        toast.success("product added to wishlist!", {
          position: "bottom-center",
        });
      },
    }
  );

  return { addToWishlistFunc, isAddToWishlistLoading, isAddToWishlistError };
};

export default useAddToWishlist;
