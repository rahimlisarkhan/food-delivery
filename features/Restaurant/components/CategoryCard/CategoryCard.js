import { useRouter } from "next/router"
import { CategoryCardStyled,CategoryImage,CategoryTitle } from "./CategoryCard.styled"

export const CategoryCard = ({title,active,slug}) => {

    const { push } = useRouter()



    const categoryPush = () =>{
        let path = slug ? `/restaurants/${slug}` : "/restaurants"
        push(path)
    }


    return (
        <CategoryCardStyled active={active} onClick={categoryPush}>
            <CategoryImage alt="pizza" src="/image/pizza.png"/>
            <CategoryTitle active={active} >
                {title}
            </CategoryTitle>
        </CategoryCardStyled>
    )
}