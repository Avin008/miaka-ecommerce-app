import type { NextPage } from "next";
import Head from "next/head";
import Slider from "../components/Slider";

const Home: NextPage = () => {
  return (
    <div className="mt-20">
      <Head>
        <title>Store</title>
      </Head>
      <Slider />
    </div>
  );
};

export default Home;
