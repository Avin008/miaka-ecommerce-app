import Head from "next/head";
import Filter from "../../components/Filter";
import Card from "../../components/Card";
import { products } from "../../components/TrendingProducts";

const Products = (): React.ReactElement => {
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
          {products.map((x) => (
            <Card key={x.id} data={x} />
          ))}
          {products.map((x) => (
            <Card key={x.id} data={x} />
          ))}
          {products.map((x) => (
            <Card key={x.id} data={x} />
          ))}
        </div>
      </>
    </div>
  );
};

export default Products;
