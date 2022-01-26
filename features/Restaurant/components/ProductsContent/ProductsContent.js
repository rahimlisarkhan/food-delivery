import { ProductsContentStyled, ProductsStyled, ProductsList } from "./ProductsContent.styled"
import TextTypograph from "../../../../components/Typograph"
import ProductCard from "../ProductCard"


export const ProductsContent = () => {
    return (
        <ProductsContentStyled>
            <ProductsStyled>
                <TextTypograph font="25" bold="true" center="true">
                    Products
                </TextTypograph>
                <ProductsList>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </ProductsList>
            </ProductsStyled>
        </ProductsContentStyled>
    )
}