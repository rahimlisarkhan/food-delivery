import TypographyText from "../../../../components/Typograph"
import { ProductCardStyled, ProductCardInfo, ProductCardButton, ProductCardContent } from "./ProductCard.styled"
import Image from "../../../../components/Image"
import AddIcon from '@mui/icons-material/Add';
import { toast } from "react-toastify";
import { useTranslation } from "next-i18next";
import { useDispatch, useSelector } from "react-redux";
import { addbasket, fillBasket } from "../../../../store/slices/basket/basketSlice";

export const ProductCard = ({ id, desc, img_url, name, price, stockLimit }) => {
    const basket = useSelector(state => state.basket.basket)
    const dispatch = useDispatch()
    const { t } = useTranslation()
    let productInBasket =  basket?.find(item => item.id === id)
        
    
    const increment = () => {

        let productsData = JSON.parse(localStorage.getItem("basket")) || []
        let totalPrice = (productInBasket?.count || 1) * price

        if (stockLimit <= productInBasket?.count) {
            toast.error(t("stock"))
            return
        }

        if (productsData.length && productsData.some(product => product.id === id)) {
            productsData.map(product => {
                if (product.id === id) {
                    product.count += 1 
                    product.totalPrice = totalPrice
                }
                return product
            })

            dispatch(fillBasket(productsData))
            localStorage.setItem("basket", JSON.stringify(productsData))
            return
        }

        let product = {
            id,
            desc,
            img_url,
            stockLimit,
            count:1,
            name,
            price,
            totalPrice
        }

        dispatch(addbasket(product))
        localStorage.setItem("basket",
            JSON.stringify([...productsData, product]))

    }

    return (
        <ProductCardStyled>
            <ProductCardContent>
                <Image src={img_url} alt={name} width="57" height="57" cover="true" />
                <ProductCardInfo>
                    <TypographyText color="darkgray" font="18" bold="true">
                        {name}
                    </TypographyText>
                    <TypographyText color="darkgray" font="14">
                        {desc}
                    </TypographyText>
                </ProductCardInfo>
            </ProductCardContent>
            <ProductCardContent row="true">
                <TypographyText color="darkgray" font="16" bold="true">
                    <TypographyText color="gray" font="12" >
                        from
                    </TypographyText>
                    ${price}
                </TypographyText>
                <ProductCardButton onClick={increment}>
                    <AddIcon />
                </ProductCardButton>
            </ProductCardContent>

        </ProductCardStyled>
    )
}