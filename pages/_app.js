import { Fragment } from 'react'
import {AppProvider} from "../app/AppProvider"
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
       <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <title>Foody Delivery</title>
      </Head>
      <AppProvider>
          <Component {...pageProps} />
      </AppProvider>
    </Fragment>
  )
}

export default appWithTranslation(MyApp);