import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromCart } from "../services";
import { ProductData } from "../types";
import { useAuthStatus } from "../hooks";

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
      },
    }
  );

  return { removeFromCartFunc, isRemoveFromCartLoading, isRemoveFromCartError };
};

export default useRemoveFromCart;
