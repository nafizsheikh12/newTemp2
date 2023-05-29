import Head from "next/head";
import React from "react";
import Registration from "../components/pages/registration/Registration";


const registration = () => {
  return (
    <>
      <Head>
        <title> Registration | ilearnaskill</title>
      </Head>
        <Registration />
    </>
  );
};

export default registration;
