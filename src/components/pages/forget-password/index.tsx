import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/logo.png";
import GeneralStyles from "../../../styles/GeneralStyles.module.css";
import ForgetPasswordForm from "./ForgetPasswordForm";

const ForgetPassword = () => {
  return (
    <div
      className={`${GeneralStyles.SigninBg} pb-4 min-h-screen bg-[#E5E5E5] relative`}
    >
      <Link href="/">
        <a className="flex  basis-0 p-4 justify-start items-center gap-1">
          <Image
            src={logo}
            width={35}
            height={35}
            className="h-5 w-6"
            alt={"logo"}
          />
          <h3 className=" font-semibold text-xl m-0">ilearnaskill</h3>
        </a>
      </Link>
      <div className="grid grid-cols-12 items-center justify-center m-auto relative">
        <div className="col-span-12 m-auto">
          <ForgetPasswordForm />
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
