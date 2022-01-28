import { Fragment } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";

const Layout = dynamic(() => import("../../components/Layout"))
const ProfileContainer = dynamic(() => import("../../features/User/Profile"))
const BasketContainer = dynamic(() => import("../../features/User/Basket"))
const OrdersContainer = dynamic(() => import("../../features/User/Orders"))
const CheckoutContainer = dynamic(() => import("../../features/User/Checkout"))
const Navigation = dynamic(() => import("../../features/User/Navigation"))
const ErrorPage = dynamic(() => import("../../features/NotFound/NotFoundContainer"))

const UserPage = () => {
    let { query: { page } } = useRouter()
    let { t } = useTranslation("menu")

    const renderPage = () => {
        let user = {}

        if (page) {
            switch (page) {
                case "profile":
                    user.component = <ProfileContainer />
                    break;
                case "basket":
                    user.component = <BasketContainer />
                    break;
                case "orders":
                    user.component = <OrdersContainer />
                    break;
                case "checkout":
                    user.component = <CheckoutContainer />
                    break;
                default:
                    user = {
                        error: true,
                        component: <ErrorPage />
                    }
            }
        }
        return user
    }

    let { component, error } = renderPage()

    return (
        <Fragment>
            <Head>
                <title> {t(page)} | Food Delivery</title>
            </Head>
            <Layout>
                {!error && <Navigation />}
                {component}
            </Layout>
        </Fragment>
    )
}

export default UserPage

export async function getStaticProps({ locale }) {
    let languages = { ...await serverSideTranslations(locale, ['common', 'menu']) }

    return {
        props: {
            ...languages
        },
    };
}