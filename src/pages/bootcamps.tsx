import Head from "next/head";
import HomeLayout from "../components/layouts/HomeLayout";
import Bootcamps from "../components/pages/bootcamps/Bootcamps";

const bootcamps = () => {
  return (
    <>
      <Head>
        <title>Bootcamps | ilearnaskill</title>
      </Head>
      <HomeLayout>
        <Bootcamps />
      </HomeLayout>
    </>
  );
};

export default bootcamps;
