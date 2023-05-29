import Head from "next/head";
import React from "react";
import HomeLayout from "../components/layouts/HomeLayout";
import dynamic from "next/dynamic";
import ContactUs from "../components/pages/contact/Contact"


const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact | ilearnaskill</title>
      </Head>
      <HomeLayout>
        <ContactUs />
      </HomeLayout>
    </>
  );
};

export default dynamic(() => Promise.resolve(Contact), { ssr: false });
