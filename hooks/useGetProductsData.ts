import { useInfiniteQuery } from "@tanstack/react-query";
import { getProductsData } from "../services/firebaseFunc";

const useGetProductsData = () => {
  const {
    data,
    isInitialLoading,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery(["products-data"], getProductsData, {
    getNextPageParam: (_lastPage, pages) => {
      return pages[pages.length - 1].docRef;
    },
  });

  return {
    data,
    isInitialLoading,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
  };
};

export default useGetProductsData;
