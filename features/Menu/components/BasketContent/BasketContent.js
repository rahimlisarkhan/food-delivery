import TypographyText from "../../../../components/Typograph"
import { BasketContentStyled, BasketStyled, CheckoutButton, CheckoutInfo, BasketListContent } from "./BasketContent.styled"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { router } from "../../../../util/route"
import { useRouter } from "next/router"
import BasketCard from "../BasketCard";
import EmptyBasket from "../EmptyBasket"
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const BasketContent = ({ basket, fixed }) => {
     let { push } = useRouter()

     let [checkoutAmount, setCheckoutAmount] = useState(0)
     let [basketFill, setBasketFill] = useState(true)

     useEffect(() => {
          setBasketFill(basket?.length)
          setCheckoutAmount(basket?.reduce((sum, item) => sum + item.totalPrice, 0))
     }, [basket])

     const onCheckout = () => {
          push(router.user.checkout.href)
     }

     console.log(basket);

     return (
          <BasketContentStyled fixed={fixed}>
               <BasketStyled fixed={fixed}>
                    <TypographyText font="16" color={basketFill ? "red" : "gray"} bold="true">
                         <ShoppingBasketIcon />
                         {basketFill} items
                    </TypographyText>
                    <BasketListContent fixed={fixed}>
                         {basketFill
                              ? basket?.map(product => <BasketCard fixed={fixed} key={`basket-product-id-${product.id}`} {...product} />)
                              : <EmptyBasket />
                         }
                    </BasketListContent>
                    <CheckoutButton
                         disabled={!basketFill ? true : false}
                         empty={!basketFill ? "true" : ""}
                         onClick={onCheckout}
                    >
                         <TypographyText font="16" color="white" bold="true">
                              Checkout
                         </TypographyText>
                         <CheckoutInfo empty={!basketFill ? "true" : ""}>
                              ${checkoutAmount?.toFixed(2)}
                         </CheckoutInfo>
                    </CheckoutButton>
               </BasketStyled>
          </BasketContentStyled>
     )
}

BasketContent.propTypes = {
     basket: PropTypes.array.isRequired,
     fixed: PropTypes.string.isRequired
}