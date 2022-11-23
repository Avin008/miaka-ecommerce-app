import { useQuery } from "@tanstack/react-query";
import { getCollectionData } from "../services";

const useSearch = (searchKey: string | null) => {
  const { data, isLoading, isError } = useQuery(
    ["search"],
    async () => {
      return getCollectionData("products");
    },
    {
      select: (searchData) => {
        return searchData.filter((product) => {
          return product.name.toLowerCase().includes(searchKey);
        });
      },
    }
  );

  return { data, isLoading, isError };
};

export default useSearch;
