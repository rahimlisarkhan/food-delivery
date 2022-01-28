import * as HeaderStyled from "./Header.styled";
import { useState } from 'react';
import Button from "../Button"
import Dropwdown from "../Dropdown"
import Navbar from '../Navbar'
import AccountMenu from "../AccoutMenu"
import BasketBadge from "../BasketBadge";
import { useTranslation } from "next-i18next";
import Typography from "../Typograph"
import Image from "../Image";
import YummyCard from "../Card/YummyCard"
import { useRouter } from "next/router";
import { router } from "../../util/route";

const Header = () => {

    const { pathname, push } = useRouter()

    let { t } = useTranslation();

    const isBottom = () => {
        return pathname === router.menu.home.href ? "true" : "false"
    }

    const isLogin = () => {
        return pathname === router.menu.login.href ? "true" : ""
    }
    const renderHeaderTop = () => {
        let login = isLogin()
        let logo = login === "true" ? "/image/icon/logo-white.svg" : "/image/icon/logo.svg"

        return (
            <HeaderStyled.Top>
                <HeaderStyled.MenuGroup>
                    <Image onClick={() => push(router.menu.home.href)} width="92" height="32" src={logo} alt="Logo" />
                    {!login && <Navbar />}
                </HeaderStyled.MenuGroup>
                <HeaderStyled.ButtonGroup>
                    <Dropwdown />
                    {!login &&
                        <>
                            <Button width="117" onClick={() => push(router.menu.login.href)}>{t('sign_up')}</Button>
                            <BasketBadge count={8} />
                            <AccountMenu />
                        </>}
                </HeaderStyled.ButtonGroup>
            </HeaderStyled.Top>
        )
    }

    const renderHeaderBottom = () => {
        if (pathname === router.menu.home.href) {
            return (
                <HeaderStyled.Bottom>
                    <HeaderStyled.Info>
                        <Typography bold="true" font="55">
                            {t("header title")}
                        </Typography>
                        <Typography font="22" color="gray">
                            {t("header desc")}
                        </Typography>
                        <HeaderStyled.ButtonGroup margin="true">
                            <Button width="220" font="22" height="70"
                                onClick={() => push(router.menu.login.href)}>{t('sign_up')}</Button>
                            <HeaderStyled.ButtonOutline width="220"
                                font="22"
                                height="70"
                                onClick={() => push(router.menu.restaurants.href)}>{t('order_now')}</HeaderStyled.ButtonOutline>
                        </HeaderStyled.ButtonGroup>
                    </HeaderStyled.Info>
                    <HeaderStyled.BottomImage>
                        <HeaderStyled.AdImage src="/image/sendvic.png" alt="sendic" />
                        <YummyCard title="Yummy sendvic" img="/image/sendvic.png" top="400" left="-105" />
                        <YummyCard title="Yummy pizza" img="/image/pizza.png" top="240" left="435" />
                        <YummyCard title="Yummy french fries" img="/image/fries.png" top="40" left="-35" />
                    </HeaderStyled.BottomImage>
                </HeaderStyled.Bottom>
            )
        }
    }

    return (
        <HeaderStyled.Content bottom={isBottom()} login={isLogin()} >
            {renderHeaderTop()}
            {renderHeaderBottom()}
        </HeaderStyled.Content>
    )
}

export default Header

