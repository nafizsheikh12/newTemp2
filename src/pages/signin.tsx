import Head from "next/head";
import React from "react";
import Signin from "../components/pages/signin";

const SigninPage = () => {
  return (
    <>
      <Head>
        <title> Signin | ilearnaskill</title>
      </Head>
      <Signin/>
    </>
  );
};

export default SigninPage;
