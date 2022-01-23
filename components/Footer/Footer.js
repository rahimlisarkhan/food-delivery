import { FooterContent} from "./Footer.styled"
import FooterBottom from "./Bottom"
import FooterTop from "./Top"
import { useRouter } from "next/router"




export const Footer = () => {
    let { pathname} = useRouter()

    const renderFooterTop = () => {
        if(pathname === "/"){
            return (
                <FooterTop/>
            )
        }
    }

    return(
        <FooterContent>
            {renderFooterTop()}
            <FooterBottom/>
        </FooterContent>
    )
}