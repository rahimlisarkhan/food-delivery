import { BasketCardStyled,BasketCardInfo, BasketCardButton } from "./BasketCard.styled"
import Image from "../../../../components/Image"
import TypographyText from "../../../../components/Typograph"

export const BasketCard = () =>{

    return(
        <BasketCardStyled>
            <Image src="/image/pizza.png" alt="pizza" width="54" height="54px" cover="true" />
            <BasketCardInfo>
                <TypographyText color="darkgray" font="16">
                    Papa John’s Pizza Restaurant
                </TypographyText>
                <TypographyText color="darkgray" font="14">
                    $15.80
                </TypographyText>
                <BasketCardButton>
                    5
                </BasketCardButton>
            </BasketCardInfo>
        </BasketCardStyled>
    )
}