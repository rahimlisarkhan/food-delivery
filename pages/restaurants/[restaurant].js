import { useTranslation } from 'next-i18next';
import Head from 'next/head'
import { Fragment } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../../components/Layout';
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router';
import { useRouter as Test } from 'next/router';

const RestaurantContainer = dynamic(() => import('../../features/Restaurant/RestaurantContainer'))
const MenuContainer = dynamic(() => import('../../features/Restaurant/MenuContainer'))

export default function RestaurantSlug() {

  const { t } = useTranslation();
  let { query } = useRouter()


  const renderPage = () => {
    if (query.name) {
      return <MenuContainer/>
    }
    return <RestaurantContainer />
  }

  return (
    <Fragment>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <title> {t("restaurants")} {query.category?.toUpperCase()} {query.name?.toUpperCase()} | Foody Delivery</title>
      </Head>
      <Layout>
        {renderPage()}
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