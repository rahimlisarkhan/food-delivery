import { NotFoundContainerStyled } from "./NotFoundContainer.styled"
import Image from "../../../components/Image"
import { useRouter } from "next/router"



export const NotFoundContainer = () => {
    let { back } = useRouter()

    return (
        <NotFoundContainerStyled>
            <Image onClick={() => back()} src="/image/404Page.svg" cover="true" alt="404 page" />
        </NotFoundContainerStyled>
    )
}