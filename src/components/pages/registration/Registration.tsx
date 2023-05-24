import React from "react";
import GeneralStyles from "../../../styles/GeneralStyles.module.css";
import MainRegister from "./mainRegister/MainRegister";

const Registration = () => {
  return (
    <>
       <div className={`${GeneralStyles.registerBg} pb-4 min-h-screen bg-[#E5E5E5] relative  py-8`}>
            <div className="z-20 px-4 sm:px-12 lg:px-48 py-8 container mx-auto relative ">
                   <MainRegister />
            </div>
        </div>
    </>
  );
};

export default Registration;
