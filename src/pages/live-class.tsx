import type { NextPage } from "next";
import Head from "next/head";

import LiveClass from "../components/pages/liveClass/LiveClass";

const Students: NextPage = () => {
  return (
    <>
      <Head>
        <title>LIve Class | ilearnaskill</title>
      </Head>

      <LiveClass />
    </>
  );
};

export default Students;
