import { FooterContent} from "./Footer.styled"
import FooterBottom from "./Bottom"
import FooterTop from "./Top"
import { useRouter } from "next/router"
import { router } from "../../util/route"




export const Footer = () => {
    let { pathname} = useRouter()

    const renderFooterTop = () => {
        if(pathname === router.menu.home.href){
            return (
                <FooterTop/>
            )
        }
    }
    
    const isTop = () => {
        return pathname ===  router.menu.home.href ? "true" : ""
    }
    const isLogin = () => {
        return pathname === router.menu.login.href ? "true" : ""
    }

    return(
        !isLogin() && <FooterContent height={isTop()} login={isLogin()}>
            {renderFooterTop()}
            <FooterBottom/>
        </FooterContent>
    )
}