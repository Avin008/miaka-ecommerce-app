import type { NextPage } from "next";
import Head from "next/head";
import {
  CategorySection,
  TrendingSection,
} from "../components";
import { getCollectionData } from "../services/firebaseFunc";

const Home: NextPage = ({ category }: any) => {
  return (
    <div className="mt-20 space-y-6">
      <Head>
        <title>
          Miaka | online clothing store
        </title>
      </Head>
      <CategorySection data={category} />
      <TrendingSection />
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const category = await getCollectionData(
    "category"
  );
  return {
    props: { category },
  };
};
