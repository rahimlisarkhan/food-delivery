import { Fragment } from "react"
import MenuHeader from "../components/MenuHeader"

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
        img_url: "https://media-cdn.tripadvisor.com/media/photo-s/1a/fe/be/14/papa-john-s-azerbaijan.jpg"
    }
    
    return (
        <Fragment>
            <MenuHeader {...restaurantData} />
        </Fragment>
    )
}
