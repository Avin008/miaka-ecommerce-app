import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthStatus } from "../hooks";
import { removeFromCart } from "../services";
import { ProductData } from "../types";
import { toast } from "react-hot-toast";

const useRemoveFromCart = (productData: ProductData) => {
  const { isAuth, authToken } = useAuthStatus();

  const queryClient = useQueryClient();

  const {
    mutate: removeFromCartFunc,
    isLoading: isRemoveFromCartLoading,
    isError: isRemoveFromCartError,
  } = useMutation(
    async () => {
      return removeFromCart(authToken!, productData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user"]);
        toast.success("product removed from cart!", {
          position: "bottom-center",
        });
      },
    }
  );

  return { removeFromCartFunc, isRemoveFromCartLoading, isRemoveFromCartError };
};

export default useRemoveFromCart;
