import { RestaurantContentStyled,RestaurantList } from "./RestaurantContent.styled"
import RestaurantCard from "../RestaurantCard"

export const RestaurantContent = () => {
    return (
        <RestaurantContentStyled>
            <RestaurantList>
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </RestaurantList>
        </RestaurantContentStyled>
    )
}