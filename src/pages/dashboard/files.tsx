import React from "react";
import Head from "next/head";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import File from "../../components/pages/dashboard/instructor/files/File";
import PrivateTemplate from "../../templates/PrivateTemplate";
import AccessTemplate from "../../templates/AccessTemplate";


const Files = () => {
  return (
    <PrivateTemplate>
      <AccessTemplate accessRole={["instructor","student"]}>
        <Head>
          <title>Files | ilearnaskill</title>
        </Head>
        <DashboardLayout>
          <File />
        </DashboardLayout>
      </AccessTemplate>
    </PrivateTemplate>
  );
};

export default Files;
