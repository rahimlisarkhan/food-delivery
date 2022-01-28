
import { OrdersContainerStyled, OrdersContent } from "./OrdersContainer.styled"
import TextTypograph from "../../../components/Typograph"
import { useTranslation } from "next-i18next"

export const OrdersContainer = () => {
    let { t } = useTranslation("menu")

    return (
        <OrdersContainerStyled>
            <OrdersContent>
                <TextTypograph font="30" bold="true" color="darkgray">
                    {t("orders")}
                </TextTypograph>
            </OrdersContent>
        </OrdersContainerStyled>
    )
}
