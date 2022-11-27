import { useQuery } from "@tanstack/react-query";
import { getSingleDoc } from "../services";

const useGetSingleProduct = (productID: string): any => {
  const { data, isLoading, isError } = useQuery(
    ["products"],
    async () => {
      return getSingleDoc("products", productID);
    },
    {
      enabled: productID !== undefined,
    }
  );

  return { data, isLoading, isError };
};

export default useGetSingleProduct;
