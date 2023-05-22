import React from "react";
import GeneralStyles from "../../../styles/GeneralStyles.module.css";
import MainRegister from "./mainRegister/MainRegister";

const Registration = () => {
  return (
    <>
       <div className={`${GeneralStyles.registerBg} pb-4 min-h-screen bg-[#E5E5E5] relative`}>
            <div className="z-20 container mx-auto pt-5 relative">
                   <MainRegister />
            </div>
        </div>
    </>
  );
};

export default Registration;
