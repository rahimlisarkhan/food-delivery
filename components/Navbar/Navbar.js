import { Fragment } from 'react';
import Box from '@mui/material/Box';
import { NavItem, NavList } from './Navbar.styled.';
import { useRouter } from 'next/router';
import { router } from '../../util/route';

export const Navbar = () => {
    const { push, pathname } = useRouter()
    return (
        <Fragment>
            <NavList>
                {Object.values(router.menu)
                    .map(nav => <NavItem active={pathname === nav.href && "true"}
                        key={`nav-${nav.id}`}
                        href={nav.href}
                        onClick={() => push(nav.href)} >
                        {nav.title}
                    </NavItem>)}
            </NavList>
        </Fragment>
    );
}
