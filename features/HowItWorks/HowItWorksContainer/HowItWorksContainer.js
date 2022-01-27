import { Content,ImageContent,ImageDelivery} from "./HowItWorksContainer.styled"
import TextTypograpy from "../../../components/Typograph"
import { useTranslation } from "next-i18next"
export const HowItWorksContainer = () => {

    let { t } = useTranslation() 

    return(
        <Content>
            <TextTypograpy font="45" center="true" bold="true">
                  {t("how it works")}
            </TextTypograpy>
            <TextTypograpy font="20" center="true" color="gray">
                  {t("how it works desc")}
            </TextTypograpy>
            <ImageContent>
                    <ImageDelivery src="/image/delivery.svg" alt="how it works"/>
            </ImageContent>
        </Content>
    )
}