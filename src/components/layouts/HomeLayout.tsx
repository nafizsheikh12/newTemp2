import React from "react";
import { ICommon } from "../../interfaces/ICommon";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

const HomeLayout = ({ children }: ICommon) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
