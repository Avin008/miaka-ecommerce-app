import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Category from "../components/Category";
import Features from "../components/Features";
import Slider from "../components/Slider";
import TrendingProducts from "../components/TrendingProducts";
import { getCollectionData } from "../services/firebaseFunc";

const Home: NextPage = ({ category }: any) => {
  return (
    <div className="mt-20 space-y-6">
      <Head>
        <title>Store</title>
      </Head>
      {/* <Slider /> */}
      <Features />
      <Category data={category} />
      <TrendingProducts />
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const category = await getCollectionData("category");
  return {
    props: { category },
  };
};
