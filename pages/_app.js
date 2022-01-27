import { Fragment } from 'react'
import {AppProvider} from "../app/AppProvider"
import Head from 'next/head'
import nextI18NextConfig from '../next-i18next.config.js'
import { appWithTranslation } from 'next-i18next';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;900&display=swap"/>
       <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <title>Foody Delivery</title>
      </Head>
      <AppProvider>
          <Component {...pageProps} />
      </AppProvider>
    </Fragment>
  )
}

export default appWithTranslation(MyApp,nextI18NextConfig);