import TypographyText from "../../../../components/Typograph"
import { ProductCardStyled, ProductCardInfo, ProductCardButton, ProductCardContent } from "./ProductCard.styled"
import Image from "../../../../components/Image"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "next-i18next";

export const ProductCard = () => {

    let {t} = useTranslation()

    let [count, setCount] = useState(0)
    let stockLimit = 9;

    const increment = () => {
        if(stockLimit <= count){
            toast.error(t("stock"))
            return
        }

        setCount(prev => prev += 1)
    }

    return (
        <ProductCardStyled>
            <ProductCardContent>
                <Image src="/image/pizza.png" alt="pizza" width="57" height="57" cover="true" />
                <ProductCardInfo>
                    <TypographyText color="darkgray" font="18" bold="true">
                        Papa John’s Pizza Restaurant
                    </TypographyText>
                    <TypographyText color="darkgray" font="14">
                        Prepared with a patty, a slice of cheese and special sauce
                    </TypographyText>
                </ProductCardInfo>
            </ProductCardContent>
            <ProductCardContent row="true">
                <TypographyText color="darkgray" font="16" bold="true">
                    From $7.90
                </TypographyText>
                <ProductCardButton onClick={increment}>
                    <AddIcon/>
                </ProductCardButton>
            </ProductCardContent>

        </ProductCardStyled>
    )
}