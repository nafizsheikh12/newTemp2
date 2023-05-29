import React from "react";
import Main from "../../components/pages/dashboard/admin/users/Main";
import Head from "next/head";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import PrivateTemplate from "../../templates/PrivateTemplate";
import AccessTemplate from "../../templates/AccessTemplate";

export default function courseAnalytics() {
  return (
    <PrivateTemplate>
      <AccessTemplate accessRole={["admin"]}>
        <Head>
          <title>courses-analytics | ilearnaskill</title>
        </Head>
        <DashboardLayout>
          <Main />
        </DashboardLayout>
      </AccessTemplate>
    </PrivateTemplate>
  );
}
