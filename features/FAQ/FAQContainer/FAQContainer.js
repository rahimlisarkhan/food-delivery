import { Content} from "./FAQContainer.styled"
import TextTypograpy from "../../../components/Typograph"
import FAQAccardion from "../components/Accardion"
import { useTranslation } from "next-i18next"


export const FAQContainer = () => {

    let { t } = useTranslation() 

    return(
        <Content>
            <TextTypograpy font="45" center="true" bold="true">
                  {t("FAQ")}
            </TextTypograpy>
            <FAQAccardion/>
        </Content>
    )
}