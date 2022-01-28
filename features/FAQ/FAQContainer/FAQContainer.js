import { Content} from "./FAQContainer.styled"
import TextTypograpy from "../../../components/Typograph"
import FAQAccardion from "../components/Accardion"
import { useTranslation } from "next-i18next"


export const FAQContainer = () => {

    let { t } = useTranslation("menu") 

    return(
        <Content>
            <TextTypograpy font="45" center="true" bold="true">
                  {t("faqs")}
            </TextTypograpy>
            <FAQAccardion/>
        </Content>
    )
}