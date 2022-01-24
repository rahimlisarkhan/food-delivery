import { useRouter } from "next/router"
import { CategoryCardStyled,CategoryImage,CategoryTitle } from "./CategoryCard.styled"

export const CategoryCard = ({title,active,slug}) => {

    const { push,asPath } = useRouter()

    const isActive = () => {
        if (asPath === `/restaurants/${slug}`) {
            return "true"
        }else if (asPath === `/restaurants` && !slug){
            return "true"
        }
        return "false"
    }

    const categoryPush = () =>{
        let path = slug ? `/restaurants/${slug}` : "/restaurants"
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