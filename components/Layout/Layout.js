import Container from '@mui/material/Container';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main/';
import { Fragment } from 'react';
Footer
const Layout = ({ children }) => {

    return (
        <Fragment>
            <Container maxWidth="xl" >
                <Header />
                <Main>
                    {children}
                </Main>
            </Container>
            <Footer />
        </Fragment>
    )
}

export default Layout