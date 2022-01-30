import { ProductsContentStyled, ProductsStyled, ProductsList } from "./ProductsContent.styled"
import TextTypograph from "../../../../components/Typograph"
import ProductCard from "../ProductCard"


export const ProductsContent = ({ products }) => {

    return (
        <ProductsContentStyled>
            <ProductsStyled>
                <TextTypograph font="25" bold="true" center="true">
                    Products
                </TextTypograph>
                <ProductsList>
                    {products.map((product, index) => <ProductCard key={`product-id-${product.id}`} 
                                                                   {...product} />)}
                </ProductsList>
            </ProductsStyled>
        </ProductsContentStyled>
    )
}