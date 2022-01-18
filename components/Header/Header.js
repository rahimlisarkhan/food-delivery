import { HeaderStyled, HeaderTop, HeaderButtonGroup, SubTitle, HeaderMenuGroup } from "./Header.styled";
import Image from "next/image";
import { useState } from 'react';
import Button from "../Button"
import Dropwdown from "../Dropdown"
import Navbar from '../Navbar'
import AccountMenu from "../AccoutMenu"
import BasketBadge from "../BasketBadge";
import { useTranslation} from "next-i18next"


const Header = (props) => {
    
    const { t } = useTranslation();

    console.log(props);

    let [open, setOpen] = useState(false);



    const handleSubmit = (form) => {
        console.log(form);
    }

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <HeaderStyled>
            <HeaderTop>
                <HeaderMenuGroup>
                    <Image width="92" height="32" src="/image/icon/logo.svg" alt="Logo" />
                    <Navbar />
                </HeaderMenuGroup>
                <HeaderButtonGroup>
                    <Dropwdown />
                    <Button width="117" onClick={handleClick}>{t('sign_up')}</Button>
                    <BasketBadge count={8}/>
                    <AccountMenu/>
                </HeaderButtonGroup>
            </HeaderTop>
        </HeaderStyled>
    )
}

export default Header


// export function getStaticProps(a){

//     return {
//         props:{
//             a:"test"
//         }
//     }
// }
