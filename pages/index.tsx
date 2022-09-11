import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="flex h-40 flex-col items-center justify-center">
      <h1 className="text-2xl font-medium">Hello world</h1>
      <p>This is where the magic happens!</p>
    </div>
  );
};

export default Home;
