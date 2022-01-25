import { useRouter } from "next/router"
import { CategoryCardStyled,CategoryImage,CategoryTitle } from "./CategoryCard.styled"

export const CategoryCard = ({title,active,slug}) => {

    const { push,query } = useRouter()

    const isActive = () => {
        if (query.category === slug) {
            return "true"
        }else if (!query.category && !slug){
            return "true"
        }
        return "false"
    }

    const categoryPush = () =>{
        let path = slug ? `/restaurants/restaurant/?category=${slug}` : "/restaurants"
        push(path)
    }

    return (
        <CategoryCardStyled active={isActive()} onClick={categoryPush}>
            <CategoryImage alt="pizza" src="/image/pizza.png"/>
            <CategoryTitle active={isActive()} >
                {title}
            </CategoryTitle>
        </CategoryCardStyled>
    )
}