import { Fragment } from 'react'
import {AppProvider} from "../app/AppProvider"
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.events.on('routeChangeStart', (url) => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

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

export default MyApp
