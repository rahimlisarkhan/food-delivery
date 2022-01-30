import { BasketCardStyled, BasketCardInfo, BasketCardButton, BasketCardDelete } from "./BasketCard.styled"
import Image from "../../../../components/Image"
import TypographyText from "../../../../components/Typograph"
import { useEffect, useState } from "react"
import { toast } from 'react-toastify';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { useTranslation } from "next-i18next";
import { fillBasket } from "../../../../store/slices/basket/basketSlice";
import { useDispatch } from "react-redux";
import { Box as ActionBox } from "@material-ui/core";

export const BasketCard = ({ id, img_url, name, count, price, totalPrice, stockLimit, fixed }) => {

    let [countB, setCountB] = useState(count || 1)
    let { t } = useTranslation()
    const dispatch = useDispatch();


    useEffect(() => {
        setCountB(count)
    }, [count])

    // let stockLimit = 9;

    const AddRemove = (action) => {
        let productsData = JSON.parse(localStorage.getItem("basket")) || []
        let totalPrice = countB * price

        if (stockLimit <= countB && action === "increment") {
            toast.error(t("stock"))
            return
        }

        setCountB(prev => {
            switch (action) {
                case "increment":
                    return prev += 1
                case "decrement":
                    return prev <= 0 ? 0 : prev -= 1
            }
        })

        if (productsData.length && productsData.some(product => product.id === id)) {

            productsData.map(product => {
                if (product.id === id) {
                    product.count = action === "increment" ? countB + 1 : countB - 1
                    product.totalPrice = totalPrice

                }
                return product
            })

            if (countB <= 0) {
                productsData = productsData.filter(product => product.id !== id)
            }

            dispatch(fillBasket(productsData))
            localStorage.setItem("basket", JSON.stringify(productsData))
            return
        }
    }

    const deleteProductBasket = (id) => {
        let productsData = JSON.parse(localStorage.getItem("basket")) || []

        if (productsData.length && productsData.some(product => product.id === id)) {
            productsData = productsData.filter(product => product.id !== id)
            dispatch(fillBasket(productsData))
            localStorage.setItem("basket", JSON.stringify(productsData))
            return
        }
    }

    return (
        <BasketCardStyled fixed={fixed}>
            <Image src={img_url} alt="pizza" width={fixed === "true" ? "45" : "96"} height={fixed === "true" ? "45" : "96"} cover="true" />
            <BasketCardInfo fixed={fixed}>
                <TypographyText color="darkgray" font={fixed === "true" ? "16" : "22"}>
                    {name}
                </TypographyText>
                <TypographyText color="darkgray" font={fixed === "true" ? "14" : "18"}>
                    ${totalPrice?.toFixed(2)}
                </TypographyText>
            </BasketCardInfo>
            <BasketCardButton fixed={fixed}>
                <ActionBox onClick={() => AddRemove("increment")}>
                    <TypographyText color="darkgray" margin="0" font="20">
                        +
                    </TypographyText>
                    <TypographyText color="darkgray" margin="0" >
                        {countB}
                    </TypographyText>
                </ActionBox>
                <TypographyText color="darkgray" margin="0" font="20" onClick={() => AddRemove("decrement")}>
                    -
                </TypographyText>
            </BasketCardButton>
            <BasketCardDelete onClick={() => deleteProductBasket(id)}>
                <DeleteSweepIcon />
            </BasketCardDelete>
        </BasketCardStyled>
    )
}