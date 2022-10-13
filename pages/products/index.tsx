import Head from "next/head";
import Filter from "../../components/Filter";
import Card from "../../components/Card";
import useGetTrendingProductsData from "../../hooks/useGetTrendingProducts";
import LoadingSpinner from "../../components/LoadingSpinner";
import { ProductData } from "../../types/types";

const Products = (): React.ReactElement => {
  const { productsData, isProductsDataLoading } = useGetTrendingProductsData();

  if (isProductsDataLoading) return <LoadingSpinner />;

  return (
    <div className="mx-auto mt-20 grid h-fit w-11/12 grid-cols-4 gap-10">
      <Head>
        <title>Products | Miaka</title>
      </Head>

      <>
        <span className="sm:hidden lg:block">
          <Filter />
        </span>

        <div className="grid h-full gap-6 sm:col-span-4 sm:grid-cols-2 md:grid-cols-3 lg:col-span-3">
          {productsData.map((productData: ProductData) => (
            <Card key={productData.id} data={productData} />
          ))}
        </div>
      </>
    </div>
  );
};

export default Products;
