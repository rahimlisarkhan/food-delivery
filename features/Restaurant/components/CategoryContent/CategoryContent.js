import CategoryCard from "../CategoryCard"
import { CategoryContentStyled } from "./CategoryContent.styled"
import { useRouter } from "next/router"


export const CategoryContent = ({categoryData}) => {


    return (
        <CategoryContentStyled>
            <CategoryCard title="All"/>
            {categoryData?.map(category => <CategoryCard key={`categiry-id-${category.id}`} {...category} 
                                           />)}
        </CategoryContentStyled>
    )
}