import Head from "next/head";
import {
  LoadingSpinner,
  Card,
  Filter,
} from "../../components";
import { ProductData } from "../../types";
import {
  useGetUserData,
  useGetTrendingProductsData,
  useGetCartAndWishlist,
} from "../../hooks";
import { useFilterStore } from "../../lib/store";

const Products = (): React.ReactElement => {
  const { productsData, isProductsDataLoading } =
    useGetTrendingProductsData();
  const { userData, isUserDataLoading } =
    useGetUserData();
  const category = useFilterStore(
    (state) => state.category
  );
  const ratings = useFilterStore(
    (state) => state.ratings
  );
  const sortBy = useFilterStore(
    (state) => state.sort_by
  );
  const price = useFilterStore(
    (state) => state.price
  );

  useGetCartAndWishlist(
    userData,
    isUserDataLoading
  );

  if (isProductsDataLoading && isUserDataLoading)
    return <LoadingSpinner />;

  const filterProductsByCategory = (
    productsData: any
  ) => {
    let filter: any = [];
    productsData.forEach((x: any) => {
      if (category.includes(x.category)) {
        filter.push(x);
      }
    });
    return filter.length > 0
      ? filter
      : productsData;
  };

  const filteredProductsByRatings = (
    productsData: any
  ) => {
    return productsData.filter(
      (x: any) => x.ratings > ratings
    );
  };

  const sortProductsByPrice = (
    productsData: any
  ) => {
    if (sortBy === "Low to High") {
      return productsData.sort(
        (a: any, b: any) => a.price - b.price
      );
    } else {
      return productsData.sort(
        (a: any, b: any) => b.price - a.price
      );
    }
  };

  const sortByPrice = (productsData: any) => {
    return productsData.filter(
      (productData: any) =>
        productData.price > price
    );
  };

  return (
    <div className="mx-auto mt-20 grid h-fit w-11/12 grid-cols-4 gap-10">
      <Head>
        <title>Products | Miaka</title>
      </Head>

      <>
        <span className="top-16 sm:fixed sm:left-1 sm:bottom-0 sm:z-20 sm:bg-white lg:static lg:block lg:bg-transparent">
          <Filter productData={productsData} />
        </span>

        <div className="grid h-full gap-6 sm:col-span-4 sm:grid-cols-2 md:grid-cols-3 lg:col-span-3">
          {sortProductsByPrice(
            sortByPrice(
              filterProductsByCategory(
                filteredProductsByRatings(
                  productsData
                )
              )
            )
          ).map((productData: ProductData) => (
            <Card
              key={productData.id}
              productData={productData}
              userData={userData}
            />
          ))}
        </div>
      </>
    </div>
  );
};

export default Products;
