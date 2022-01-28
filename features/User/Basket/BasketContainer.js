import { BasketContainerStyled, BasketContent } from "./BasketContainer.styled"
import TextTypograph from "../../../components/Typograph"
import { useTranslation } from "next-i18next"

export const BasketContainer = () => {
    
    let { t } = useTranslation("menu")

    return (
        <BasketContainerStyled>
            <BasketContent>
                <TextTypograph font="30" bold="true" color="darkgray">
                    {t("basket")}
                </TextTypograph>
            </BasketContent>
        </BasketContainerStyled>
    )
}
