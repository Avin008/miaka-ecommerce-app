import { useMutation, useQueryClient } from "@tanstack/react-query";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { ProductData } from "../types";
import decreaseProductQty from "../utility/decreaseProductQty";
import useAuthStatus from "./useAuthStatus";

const useDecreaseQty = (cart: ProductData[], productID: string) => {
  const queryClient = useQueryClient();

  const { authToken } = useAuthStatus();
  const {
    mutate: decreaseQty,
    isLoading: isDecreaseQtyLoading,
    isError: isDecreaseQtyError,
  } = useMutation(
    async () => {
      const docRef = doc(db, "users", authToken!);
      await updateDoc(docRef, {
        cart: decreaseProductQty(cart, productID),
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user"]);
      },
    }
  );

  return {
    decreaseQty,
    isDecreaseQtyLoading,
    isDecreaseQtyError,
  };
};

export default useDecreaseQty;
