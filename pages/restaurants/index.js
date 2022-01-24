import { useTranslation } from 'next-i18next';
import Head from 'next/head'
import { Fragment } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../../components/Layout';
import dynamic from 'next/dynamic'

const RestaurantContainer = dynamic(() => import('../../features/Restaurant/RestaurantContainer'))

export default function Restaurants() {

  const { t } = useTranslation();

  return (
    <Fragment>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <title> {t("restaurants")} | Foody Delivery</title>
      </Head>
      <Layout>
        <RestaurantContainer/>
      </Layout>
    </Fragment>
  )
}


export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'menu'])),
    },
  };
}