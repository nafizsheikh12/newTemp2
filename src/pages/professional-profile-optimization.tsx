import Head from "next/head";
import React from "react";
import HomeLayout from "../components/layouts/HomeLayout";
import ProfessionalProfileOpt from "../components/pages/professionalProfileOpt/ProfessionalProfileOpt";

const professionalprofileoptimization = () => {
  return (
    <>
      <Head>
        <title>ProfessionalProfileOptimization | ilearnaskill</title>
      </Head>
      <HomeLayout>
        <ProfessionalProfileOpt />
      </HomeLayout>
    </>
  );
};

export default professionalprofileoptimization;
