import { HeaderStyled, HeaderTop,HeaderButtonGroup,SubTitle } from "./Header.styled";
import Image from "next/image";
import {useState } from 'react';
import Button from "../Button"
import Dropwdown from "../Dropdown"



const Header = () => {
    let [open, setOpen] = useState(false);

    const handleSubmit = (form) =>{
        console.log(form);
    }

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <HeaderStyled>
            <HeaderTop>
                <Image width="92" height="32" src="/image/icon/logo.svg" alt="Logo" />
                <HeaderButtonGroup>
                    {/* <Dropwdown /> */}
                 <Button onClick={handleClick}>{"Sign up"}</Button>
                </HeaderButtonGroup>
                {/* <Image width="40" height="40" src={avatar} /> */}
                {/* <SubTitle>{t('admin')}</SubTitle> */}
                
            </HeaderTop>
        </HeaderStyled>
    )
}

export default Header