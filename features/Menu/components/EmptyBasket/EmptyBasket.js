import { useTranslation } from "next-i18next"
import Image from "../../../../components/Image"
import TypographyText from "../../../../components/Typograph"
import {EmptyBasketStyled} from "./EmptyBasket.styled"

export const EmptyBasket = () =>{

    let { t } = useTranslation()

    return(
        <EmptyBasketStyled>
            <Image src="/image/icon/basket.svg" width="263"  alt="empty basket"/>
            <TypographyText font="40" center="true" color="gray">
                {t("basket empty")}
            </TypographyText>
        </EmptyBasketStyled>
    )
}