import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import GlobalStyle from "../styles/global";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AppProvider = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
                {children}
                <ToastContainer />
        </ThemeProvider >
    )
}