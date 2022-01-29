import TypographyText from "../../../../components/Typograph"
import { BasketContentStyled, BasketStyled, CheckoutButton, CheckoutInfo, BasketListContent } from "./BasketContent.styled"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { router } from "../../../../util/route"
import { useRouter } from "next/router"
import { BasketCard } from "../BasketCard/BasketCard";

export const BasketContent = () => {

     let { push } = useRouter()

     const onCheckout = () => {
          push(router.user.checkout.href)
     }

     return (
          <BasketContentStyled>
               <BasketStyled>
                    <TypographyText font="16" color="red" bold="true">
                         <ShoppingBasketIcon />
                         3 items
                    </TypographyText>
                    <BasketListContent>
                         <BasketCard/>
                    </BasketListContent>
                    <CheckoutButton onClick={onCheckout}>
                         <TypographyText font="16" color="white" bold="true">
                              Checkout
                         </TypographyText>
                         <CheckoutInfo>
                              $37.40
                         </CheckoutInfo>
                    </CheckoutButton>
               </BasketStyled>
          </BasketContentStyled>
     )
}