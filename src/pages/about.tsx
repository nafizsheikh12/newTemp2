/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import React from "react";
import HomeLayout from "../components/layouts/HomeLayout";
import aboutBG from "../styles/GeneralStyles.module.css";
import dynamic from "next/dynamic";
import About from "../components/pages/about-us/About"

const about = () => {
  return (
    <>
      <Head>
        <title>About | Fourth IT Academy</title>
      </Head>
      <HomeLayout>
           <About />
      </HomeLayout>
    </>
  );
};

export default dynamic(() => Promise.resolve(about), { ssr: false });
