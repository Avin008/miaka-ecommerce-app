import type { NextPage } from "next";
import Head from "next/head";
import Category from "../components/Category";
import Features from "../components/Features";
import Slider from "../components/Slider";

const Home: NextPage = () => {
  return (
    <div className="mt-20 space-y-6">
      <Head>
        <title>Store</title>
      </Head>
      <Slider />
      <Features />
      <Category />
    </div>
  );
};

export default Home;
