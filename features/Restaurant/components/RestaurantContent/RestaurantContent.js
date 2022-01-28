import { RestaurantContentStyled, RestaurantList } from "./RestaurantContent.styled"
import RestaurantCard from "../RestaurantCard"
import Paginations from "../../../../components/Pagination";

export const RestaurantContent = ({ restaurantData, handlePages, pagesCount }) => {

    return (
        <RestaurantContentStyled>
            <RestaurantList>
                {restaurantData?.map(restaurant => <RestaurantCard 
                                                        key={`restaurant-id-${restaurant.id}`} 
                                                        {...restaurant} />)}
            </RestaurantList>
            <Paginations count={pagesCount} onPages={handlePages} />

        </RestaurantContentStyled>
    )
}