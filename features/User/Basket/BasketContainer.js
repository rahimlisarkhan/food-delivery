import { BasketContainerStyled } from "./BasketContainer.styled"
import TextTypograph from "../../../components/Typograph"
import { useTranslation } from "next-i18next"
import { useSelector} from "react-redux"
import BasketContent from "../../Menu/components/BasketContent"

export const BasketContainer = () => {
    
    let { t } = useTranslation("menu")
    const { basket } = useSelector(state => state.basket)

    console.log(basket);

    return (
        <BasketContainerStyled>
                <TextTypograph font="30" bold="true" color="darkgray">
                    {t("basket")}
                </TextTypograph>
            <BasketContent fixed="false" basket={basket}/>
        </BasketContainerStyled>
    )
}
