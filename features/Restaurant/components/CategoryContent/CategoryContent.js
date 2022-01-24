import CategoryCard from "../CategoryCard"
import { CategoryContentStyled } from "./CategoryContent.styled"
import { useRouter } from "next/router"


export const CategoryContent = () => {

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

    const { pathname} = useRouter()

    const isActive = () => {
        if (pathname === "/restaurants" || pathname === `/restaurants/${slug}`) {
            return "true"
        }
        return "false"
    }

    return (
        <CategoryContentStyled>
            <CategoryCard title="All" active={isActive()} />
            {categoryData?.map(category => <CategoryCard key={`categiry-id-${category.id}`} {...category} 
                                            active={isActive()} />)}
        </CategoryContentStyled>
    )
}