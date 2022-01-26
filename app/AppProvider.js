import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import GlobalStyle from "../styles/global";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from 'next/router'
import NProgress from 'nprogress'

Router.events.on('routeChangeStart', (url) => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export const AppProvider = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
                {children}
                <ToastContainer />
        </ThemeProvider >
    )
}