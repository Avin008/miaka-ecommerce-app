import { useQuery } from "@tanstack/react-query";
import { getSingleDoc } from "../services";

const useGetSingleProduct = (productID: string) => {
  const { data, isLoading, isError } = useQuery(["products"], async () => {
    return await getSingleDoc("products", productID);
  });

  return { data, isLoading, isError };
};

export default useGetSingleProduct;
