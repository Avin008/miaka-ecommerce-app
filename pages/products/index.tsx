import Head from "next/head";
import Filter from "../../components/Filter";
import Card from "../../components/Card";
import { supabase } from "../../utils/supabaseClient";

export type Sizes = {
  id: number;
  productId: number;
  collection: string[];
};

export type Props = {
  products: {
    id: number;
    created_at: string;
    name: string;
    img: string;
    price: number;
    sizes: Sizes[];
  }[];
};

const Products = ({ products }: Props): React.ReactElement => {
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
        </div>
      </>
    </div>
  );
};

export default Products;

export const getServerSideProps = async () => {
  let { data: products, error } = await supabase
    .from("products")
    .select("*, sizes(*)");

  return {
    props: {
      products,
    },
  };
};
