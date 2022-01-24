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

    
    const isTop = () => {
        return pathname === "/" ? "true" : "false"
    }

    return(
        <FooterContent height={isTop()}>
            {renderFooterTop()}
            <FooterBottom/>
        </FooterContent>
    )
}