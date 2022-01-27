import { Fragment } from 'react';
import { NavItem, NavList } from './Navbar.styled.';
import { useRouter } from 'next/router';
import { router } from '../../util/route';
import { useTranslation } from 'next-i18next';

export const Navbar = () => {
    const { push, asPath } = useRouter()
    const { t } = useTranslation('menu')

    const isActive = (href) => {
        if (asPath === href) {
            return "true"
        } else if (/\/restaurants\//.test(asPath) && href === router.menu.restaurants.href) {
            return "true"
        }
        return undefined
    }

    return (
        <Fragment>
            <NavList>
                {Object.values(router.menu)
                    .filter(item => item.href !== "/login")
                    .map(nav => <NavItem active={isActive(nav.href)}
                        key={`nav-${nav.id}`}
                        href={nav.href}
                        onClick={() => push(nav.href)} >
                        {t(nav.title)}
                    </NavItem>)}
            </NavList>
        </Fragment>
    );
}
