import Head from "next/head";
import ForgetPassword from "../components/pages/forget-password"

const ForgetPasswordPage = () => {
    return (
        <>
            <Head>
                <title> forget-password | ilearnaskills</title>
            </Head>
            <ForgetPassword />
        </>
    );
};

export default ForgetPasswordPage;