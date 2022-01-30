import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import GlobalStyle from "../styles/global";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from 'next/router'
import NProgress from 'nprogress'
import { Provider } from "react-redux";
import { store } from "../store";

Router.events.on('routeChangeStart', (url) => {
    NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export const AppProvider = ({ children }) => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                {children}
                <ToastContainer />
            </ThemeProvider >
        </Provider>
    )
}