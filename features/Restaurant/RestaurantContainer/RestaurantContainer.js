import { Fragment } from "react"
import CategoryContent from "../components/CategoryContent"
import RestaurantContent from "../components/RestaurantContent"


export const RestaurantContainer = () => {
    
    const categoryData = [
        {
            id: "001",
            slug: "fast-food",
            title: "Fast Food",
            img_url: "/image/sendvic.png"
        },
        {
            id: "002",
            slug: "pizza",
            title: "Pizza",
            img_url: "/image/pizza.png"
        },
    ]

    return(
        <Fragment>
            <CategoryContent categoryData={categoryData}/>
            <RestaurantContent/>
        </Fragment>
    )
}
