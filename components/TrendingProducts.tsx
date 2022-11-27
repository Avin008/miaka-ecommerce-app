import { LoadingSpinner, ProductCard } from "../components";
import { useGetTrendingProductsData, useGetUserData } from "../hooks";
import { useGetCartAndWishlist } from "../hooks";
import { ProductData } from "../types";

const TrendingProducts = (): React.ReactElement => {
  const { productsData, isProductsDataLoading } = useGetTrendingProductsData();
  const { userData, isUserDataLoading } = useGetUserData();

  useGetCartAndWishlist(userData, isUserDataLoading);

  if (isProductsDataLoading && isUserDataLoading) return <LoadingSpinner />;

  return (
    <div className="mx-auto w-11/12 space-y-5 px-3">
      <h1 className="text-base font-bold">POPULAR PRODUCTS</h1>
      <div className="grid h-fit justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-4">
        {productsData
          ?.slice(0, 4)
          .filter((x: ProductData) => x.ratings > 3)
          .map((productData: ProductData) => (
            <ProductCard
              key={productData.id}
              productData={productData}
              userData={userData}
            />
          ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
