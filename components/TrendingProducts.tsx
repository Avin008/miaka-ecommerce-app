import { ProductCard, LoadingSpinner } from "../components";
import { ProductData } from "../types";
import { useGetUserData, useGetTrendingProductsData } from "../hooks";

const TrendingProducts = (): React.ReactElement => {
  const { productsData, isProductsDataLoading } = useGetTrendingProductsData();
  const { userData, isUserDataLoading } = useGetUserData();

  if (isProductsDataLoading && isUserDataLoading) return <LoadingSpinner />;

  return (
    <div className="mx-auto w-11/12 space-y-5 px-3">
      <h1 className="text-lg font-bold">POPULAR PRODUCTS</h1>
      <div className="grid h-72 justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-3">
        {productsData.map((productData: ProductData) => (
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
