import TypographyText from "../../../../components/Typograph"
import { ProductCardStyled, ProductCardInfo, ProductCardButton, ProductCardContent } from "./ProductCard.styled"
import Image from "../../../../components/Image"
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState,useMemo } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "next-i18next";
import { useDispatch, useSelector } from "react-redux";
import { addbasket, fillBasket } from "../../../../store/slices/basket/basketSlice";

export const ProductCard = ({ id, desc, img_url, name, price, stockLimit }) => {
    const basket = useSelector(state => state.basket.basket)
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [count, setCount] = useState(1)
    
        
    useEffect(() => {

        // let product = basket?.find(item => item.id === id)
        // setProduct(basket?.filter(item => item.id === id)[0])
        // console.log("productcount",product?.count);

    }, [id])
    
    
    const increment = () => {

        let productsData = JSON.parse(localStorage.getItem("basket")) || []
        let totalPrice = (count || 1) * price

        if (stockLimit <= count) {
            toast.error(t("stock"))
            return
        }

        setCount(prev => prev += 1)

        if (productsData.length && productsData.some(product => product.id === id)) {
            productsData.map(product => {
                if (product.id === id) {
                    product.count = count
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
            count: count || 1,
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