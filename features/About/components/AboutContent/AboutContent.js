


import { Content, ImageContent, ImageDelivery, TitleContent, ContentRow, ProductContent } from "./AboutContent.styled"
import TextTypograpy from "../../../../components/Typograph"
import { useTranslation } from "next-i18next"
import AboutCard from "../AboutCard"

export const AboutContent = () => {

    let { t } = useTranslation("common","menu")
    let menuTranslate = useTranslation("menu")

    return (
        <Content>
            <ContentRow>
                <TitleContent>
                    <TextTypograpy font="45"  bold="true">
                        {menuTranslate.t("about us")}
                    </TextTypograpy>
                    <TextTypograpy font="20"  color="gray">
                        {t("how it works desc")}
                    </TextTypograpy>
                </TitleContent>
                <ProductContent>
                    <ImageContent>
                        <AboutCard/>
                        <AboutCard top="310" left="-100"/>
                        <AboutCard top="210" left="200"/>
                        <AboutCard top="550" left="100"/>
                    </ImageContent>
                </ProductContent>
            </ContentRow>

        </Content>
    )
}