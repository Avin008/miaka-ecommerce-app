import { useMutation, useQueryClient } from "@tanstack/react-query";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { ProductData } from "../types";
import increaseProductQty from "../utility/increaseProductQty";
import useAuthStatus from "./useAuthStatus";

const useIncreaseQty = (cart: ProductData[], productID: string) => {
  const queryClient = useQueryClient();

  const { authToken } = useAuthStatus();
  const {
    mutate: increaseQty,
    isLoading: isIncreaseQtyLoading,
    isError: isIncreaseQtyError,
  } = useMutation(
    async () => {
      const docRef = doc(db, "users", authToken!);
      await updateDoc(docRef, {
        cart: increaseProductQty(cart, productID),
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user"]);
      },
    }
  );

  return {
    increaseQty,
    isIncreaseQtyLoading,
    isIncreaseQtyError,
  };
};

export default useIncreaseQty;
