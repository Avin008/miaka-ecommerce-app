import { useQuery } from "@tanstack/react-query";
import { getCollectionData } from "../services";

const useGetTrendingProductsData = (): {
  productsData: any;
  isProductsDataLoading: boolean;
  isProductsDataError: boolean;
} => {
  const {
    data: productsData,
    isLoading: isProductsDataLoading,
    isError: isProductsDataError,
  } = useQuery(["products"], async () => {
    return getCollectionData("products");
  });

  return { productsData, isProductsDataLoading, isProductsDataError };
};

export default useGetTrendingProductsData;
