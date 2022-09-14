import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Slider from "../components/Slider";
import header from "../public/header.jpg";

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
