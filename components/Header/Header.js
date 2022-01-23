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

const Header = (props) => {

    const {pathname} = useRouter()


    let { t } = useTranslation();

    let [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open)
    }
    const renderHeaderBottom = () => {
        if(pathname === "/"){
            return (
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
                    <HeaderStyled.AdImage src="/image/sendvic.png" alt="sendic" />
                    <YummyCard title="Yummy sendvic" img="/image/sendvic.png" top="400" left="-105" />
                    <YummyCard title="Yummy pizza" img="/image/pizza.png" top="240" left="435" />
                    <YummyCard title="Yummy french fries" img="/image/fries.png" top="40" left="-35" />
                </HeaderStyled.BottomImage>
            </HeaderStyled.Bottom>
            )
        }
    }

    const isBottom = () => {
        return pathname === "/" ? "true" : "false"
    }

    return (
        <HeaderStyled.Content bottom={isBottom()}>
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
            {renderHeaderBottom()}
        </HeaderStyled.Content>
    )
}

export default Header

