import { Fragment } from 'react';
import Box from '@mui/material/Box';
import { NavItem, NavList } from './Navbar.styled.';
import { useRouter } from 'next/router';
import { router } from '../../util/route';
import { useTranslation } from 'next-i18next';

export const Navbar = () => {
    const { push, pathname } = useRouter()
    const { t } = useTranslation('menu')
    return (
        <Fragment>
            <NavList>
                {Object.values(router.menu)
                    .map(nav => <NavItem active={pathname === nav.href ? "true": undefined}
                        key={`nav-${nav.id}`}
                        href={nav.href}
                        onClick={() => push(nav.href)} >
                        {t(nav.title)}
                    </NavItem>)}
            </NavList>
        </Fragment>
    );
}
