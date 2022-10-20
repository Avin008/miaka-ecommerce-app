import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart } from "../services/";
import { ProductData } from "../types";
import { useAuthStatus } from "../hooks";

const useAddToCart = (productData: ProductData) => {
  const { isAuth, authToken } = useAuthStatus();

  const queryClient = useQueryClient();

  const {
    mutate: addToCartFunc,
    isLoading: isAddToCartLoading,
    isError: isAddToCartError,
  } = useMutation(
    async () => {
      return addToCart(authToken!, productData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user"]);
      },
    }
  );

  return { addToCartFunc, isAddToCartLoading, isAddToCartError };
};

export default useAddToCart;
