import { useTranslation } from 'next-i18next';
import Head from 'next/head'
import { Fragment } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router';

const Layout = dynamic(() => import('../../components/Layout'))
const RestaurantContainer = dynamic(() => import('../../features/Restaurant/RestaurantContainer'))
const MenuContainer = dynamic(() => import('../../features/Menu/MenuContainer'))

export default function RestaurantSlug(props) {

  const { t } = useTranslation("menu");

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
        <title> {t("restaurants")} {query.category && query.category[0].toUpperCase()}{query.category?.slice(1)} {query.name?.toUpperCase()} | Foody Delivery</title>
      </Head>
      <Layout>
        {renderPage()}
      </Layout>
    </Fragment>
  )
}

export async function getServerSideProps({ locale }) {
 let languages = { ...await serverSideTranslations(locale, ['common', 'menu']) }

  return {
    props: {
     ...languages
    },
  };
}