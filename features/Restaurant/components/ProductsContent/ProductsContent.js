import { ProductsContentStyled, ProductsStyled } from "./ProductsContent.styled"
import TextTypograph from "../../../../components/Typograph"


export const ProductsContent = () => {
   return(
        <ProductsContentStyled>
            <ProductsStyled>
                <TextTypograph font="25" bold="true" center="true">
                    Products
                </TextTypograph>
            </ProductsStyled>
        </ProductsContentStyled>
   ) 
}