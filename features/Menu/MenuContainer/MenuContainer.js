import { Fragment } from "react"
import MenuHeader from "../components/MenuHeader"
import ProductsContent from "../components/ProductsContent"
import BasketContent from "../components/BasketContent"
import { useSelector } from "react-redux"
import restaurantData from "../../../data/restaurant.json"

export const MenuContainer = () => {
    const { basket } = useSelector(state => state.basket)

    return (
        <Fragment>
            <MenuHeader {...restaurantData} />
            <ProductsContent products={restaurantData.products} />
            <BasketContent basket={basket} />
        </Fragment>
    )
}
