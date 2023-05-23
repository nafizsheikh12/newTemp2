import Head from "next/head";
import React from "react";
import HomeLayout from "../components/layouts/HomeLayout";
import dynamic from "next/dynamic";
import CoursesPage from "../components/pages/courses/Courses";

const Courses = () => {
  return (
    <>
      <Head>
        <title>Courses | Fourth IT Academy</title>
      </Head>
      <HomeLayout>
        <CoursesPage />
      </HomeLayout>
    </>
  );
};

export default dynamic(() => Promise.resolve(Courses), { ssr: false });
