import { Fragment } from "react"
import MenuHeader from "../components/MenuHeader"
import ProductsContent from "../components/ProductsContent"
import BasketContent from "../components/BasketContent"


export const MenuContainer = () => {

    const restaurantData = {
        id: "002",
        slug: "papa-johns",
        name: "Papa John's",
        address: "Ataturk street 88 Baku",
        cuisine: "chinese, sea-food, thai, lebanese, caribbean",
        delivery_price: 0,
        delivery_min: 28,
        category: {
            id: "002",
            slug: "pizza",
            title: "Pizza",
            img_url: "/image/pizza.png"
        },
        img_url: "https://media-cdn.tripadvisor.com/media/photo-s/19/f5/62/cb/papa-john-s-pizza.jpg"
    }
    
    return (
        <Fragment>
            <MenuHeader {...restaurantData} />
            <ProductsContent/>
            <BasketContent/>
        </Fragment>
    )
}
