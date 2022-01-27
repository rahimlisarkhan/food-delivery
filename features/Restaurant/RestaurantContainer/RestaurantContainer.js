import { Fragment } from "react"
import CategoryContent from "../components/CategoryContent"
import RestaurantContent from "../components/RestaurantContent"


export const RestaurantContainer = () => {
    
    const pagesCount = 3

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
    const restaurantData = [
        {
            id: "001",
            slug: "burger-king",
            name: "Burger King",
            address: "Nizami street 45 Baku",
            cuisine:"chinese, sea-food, thai, lebanese, caribbean",
            delivery_price: 5,
            delivery_min: 11,
            category:{
                    id: "001",
                    slug: "fast-food",
                    title: "Fast Food",
                    img_url: "/image/sendvic.png"
            },
            img_url: "https://logowik.com/content/uploads/images/310_burgerking.jpg"
        },
        {
            id: "002",
            slug: "papa-johns",
            name: "Papa John's",
            address: "Ataturk street 88 Baku",
            cuisine:"chinese, sea-food, thai, lebanese, caribbean",
            delivery_price: 0,
            delivery_min: 28,
            category:    {
                id: "002",
                slug: "pizza",
                title: "Pizza",
                img_url: "/image/pizza.png"
            },
            img_url: "https://media-cdn.tripadvisor.com/media/photo-s/1a/fe/be/14/papa-john-s-azerbaijan.jpg"
        },
        {
            id: "003",
            slug: "burger-king",
            name: "Burger King",
            address: "Nizami street 45 Baku",
            cuisine:"chinese, sea-food, thai, lebanese, caribbean",
            delivery_price: 5,
            delivery_min: 11,
            category:{
                    id: "001",
                    slug: "fast-food",
                    title: "Fast Food",
                    img_url: "/image/sendvic.png"
            },
            img_url: "https://logowik.com/content/uploads/images/310_burgerking.jpg"
        },
        {
            id: "004",
            slug: "papa-johns",
            name: "Papa John's",
            address: "Ataturk street 88 Baku",
            cuisine:"chinese, sea-food, thai, lebanese, caribbean",
            delivery_price: 0,
            delivery_min: 28,
            category:    {
                id: "002",
                slug: "pizza",
                title: "Pizza",
                img_url: "/image/pizza.png"
            },
            img_url: "https://media-cdn.tripadvisor.com/media/photo-s/1a/fe/be/14/papa-john-s-azerbaijan.jpg"
        },
        {
            id: "005",
            slug: "burger-king",
            name: "Burger King",
            address: "Nizami street 45 Baku",
            cuisine:"chinese, sea-food, thai, lebanese, caribbean",
            delivery_price: 5,
            delivery_min: 11,
            category:{
                    id: "001",
                    slug: "fast-food",
                    title: "Fast Food",
                    img_url: "/image/sendvic.png"
            },
            img_url: "https://logowik.com/content/uploads/images/310_burgerking.jpg"
        },
        {
            id: "006",
            slug: "papa-johns",
            name: "Papa John's",
            address: "Ataturk street 88 Baku",
            cuisine:"chinese, sea-food, thai, lebanese, caribbean",
            delivery_price: 0,
            delivery_min: 28,
            category:    {
                id: "002",
                slug: "pizza",
                title: "Pizza",
                img_url: "/image/pizza.png"
            },
            img_url: "https://media-cdn.tripadvisor.com/media/photo-s/1a/fe/be/14/papa-john-s-azerbaijan.jpg"
        },
        {
            id: "007",
            slug: "burger-king",
            name: "Burger King",
            address: "Nizami street 45 Baku",
            cuisine:"chinese, sea-food, thai, lebanese, caribbean",
            delivery_price: 5,
            delivery_min: 11,
            category:{
                    id: "001",
                    slug: "fast-food",
                    title: "Fast Food",
                    img_url: "/image/sendvic.png"
            },
            img_url: "https://logowik.com/content/uploads/images/310_burgerking.jpg"
        },
        {
            id: "008",
            slug: "papa-johns",
            name: "Papa John's",
            address: "Ataturk street 88 Baku",
            cuisine:"chinese, sea-food, thai, lebanese, caribbean",
            delivery_price: 0,
            delivery_min: 28,
            category:    {
                id: "002",
                slug: "pizza",
                title: "Pizza",
                img_url: "/image/pizza.png"
            },
            img_url: "https://media-cdn.tripadvisor.com/media/photo-s/1a/fe/be/14/papa-john-s-azerbaijan.jpg"
        },
    ]

    const handlePages = async (count) => {
        // console.log(count);
    }
    return(
        <Fragment>
            <CategoryContent categoryData={categoryData}/>
            <RestaurantContent 
                restaurantData={restaurantData} 
                pagesCount={pagesCount} 
                handlePages={handlePages}/>
        </Fragment>
    )
}
