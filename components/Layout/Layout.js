import Container from '@mui/material/Container';
import Header from '../Header/Header';
import Main from '../Main/';

const Layout = ({ children }) => {

    return (
        <Container maxWidth="xl" >
            <Header />
            <Main>
                {children}
            </Main>
        </Container>
    )
}

export default Layout