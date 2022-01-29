import { BasketCardStyled, BasketCardInfo, BasketCardButton, BasketCardDelete } from "./BasketCard.styled"
import Image from "../../../../components/Image"
import TypographyText from "../../../../components/Typograph"
import { useState } from "react"
import { toast } from 'react-toastify';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { useTranslation } from "next-i18next";

export const BasketCard = () => {

    let [count, setCount] = useState(0)
    let { t } = useTranslation()

    let stockLimit = 9;

    const increment = () => {
        if (stockLimit <= count) {
            toast.error(t("stock"))
            return
        }

        setCount(prev => prev += 1)
    }

    const decrement = () => {
        setCount(prev => prev <= 0 ? 0 : prev -= 1)
    }

    return (
        <BasketCardStyled>
            <Image src="/image/pizza.png" alt="pizza" width="45" height="45" cover="true" />
            <BasketCardInfo>
                <TypographyText color="darkgray" font="16">
                    Papa John’s Pizza Restaurant
                </TypographyText>
                <TypographyText color="darkgray" font="14">
                    $15.80
                </TypographyText>
            </BasketCardInfo>
            <BasketCardButton>
                <TypographyText color="darkgray" margin="0" font="20" onClick={increment} >
                    +
                </TypographyText>
                <TypographyText color="darkgray" margin="0">
                    {count}
                </TypographyText>
                <TypographyText color="darkgray" margin="0" font="20" onClick={decrement}>
                    -
                </TypographyText>
            </BasketCardButton>
            <BasketCardDelete>
                <DeleteSweepIcon />
            </BasketCardDelete>
        </BasketCardStyled>
    )
}