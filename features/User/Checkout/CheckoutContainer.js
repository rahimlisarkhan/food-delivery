
import { CheckoutContainerStyled, CheckoutContent } from "./CheckoutContainer.styled"
import TextTypograph from "../../../components/Typograph"
import { useTranslation } from "next-i18next"


export const CheckoutContainer = () => {

    let { t } = useTranslation("menu")

    return (
        <CheckoutContainerStyled>
            <CheckoutContent>
                <TextTypograph font="30" bold="true" color="darkgray">
                    {t("checkout")}
                </TextTypograph>
            </CheckoutContent>
        </CheckoutContainerStyled>
    )
}
