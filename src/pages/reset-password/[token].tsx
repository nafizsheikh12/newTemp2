import Head from "next/head";
import ResetPassword from "../../components/pages/reset-password"

const ResetPasswordPage = () => {
    return (
        <>
            <Head>
                <title> reset-password | ilearnaskill</title>
            </Head>
            <ResetPassword />
        </>
    );
};

export default ResetPasswordPage;