import type { NextPage } from "next";
import Head from "next/head";
import HomeLayout from "../components/layouts/HomeLayout";
import HomeComponent from "../components/pages/home/Home";
import dynamic from "next/dynamic";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Fourth IT Academy</title>
      </Head>

      <HomeLayout>
        <HomeComponent />
      </HomeLayout>
    </>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
