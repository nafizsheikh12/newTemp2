import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/logo.png";
import GeneralStyles from "../../../styles/GeneralStyles.module.css";
import SigninForm from "./SigninForm1";

const Signin = () => {
    return (
        <div className={`${GeneralStyles.SigninBg} pb-4 min-h-screen bg-[#E5E5E5] relative`}>
            <div className="z-20 pt-36 px-2 flex justify-center items-center">
                   <SigninForm />
            </div>
        </div>
    );
};

export default Signin;