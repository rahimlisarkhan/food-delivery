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

const Header = (props) => {

    let { t } = useTranslation('common');

    let [open, setOpen] = useState(false);

    const handleSubmit = (form) => {
        console.log(form);
    }

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <HeaderStyled.Content>
            <HeaderStyled.Top>
                <HeaderStyled.MenuGroup>
                    <Image width="92" height="32" src="/image/icon/logo.svg" alt="Logo" />
                    <Navbar />
                </HeaderStyled.MenuGroup>
                <HeaderStyled.ButtonGroup>
                    <Dropwdown />
                    <Button width="117" onClick={handleClick}>{t('sign_up')}</Button>
                    <BasketBadge count={8} />
                    <AccountMenu />
                </HeaderStyled.ButtonGroup>
            </HeaderStyled.Top>
            <HeaderStyled.Bottom>
                <HeaderStyled.Info>
                    <Typography bold="true" font="60">
                        {t("header title")}
                    </Typography>
                    <Typography font="22" color="gray">
                        {t("header desc")}
                    </Typography>
                    <HeaderStyled.ButtonGroup margin="true">
                        <Button width="220" font="22" height="70" onClick={handleClick}>{t('sign_up')}</Button>
                        <HeaderStyled.ButtonOutline width="220" 
                                                    font="22" 
                                                    height="70" 
                                                    onClick={handleClick}>{t('order_now')}</HeaderStyled.ButtonOutline>
                    </HeaderStyled.ButtonGroup>
                </HeaderStyled.Info>
                <HeaderStyled.BottomImage>
                    <HeaderStyled.AdImage width="700" src="/image/sendvic.png" alt="sendic" />
                </HeaderStyled.BottomImage>
            </HeaderStyled.Bottom>
        </HeaderStyled.Content>
    )
}

export default Header

