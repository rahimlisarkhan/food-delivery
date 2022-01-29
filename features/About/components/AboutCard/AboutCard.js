import { AboutCardStyled, AboutImg, AboutCardContent } from "./AboutCard.styled"
import Image from "../../../../components/Image"
import { useRouter } from "next/router"
import { router } from "../../../../util/route"
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import TypographyText from "../../../../components/Typograph";

export const AboutCard = ({ top, left }) => {

    let { push } = useRouter()
    const value = 4.5;

    return (
        <AboutCardContent top={top} left={left} onClick={() => push(router.menu.restaurants.href)}>
            <AboutCardStyled >
                <AboutImg>
                    <Image src="https://www.seekpng.com/png/detail/358-3587532_big-tasty-mccountry-mcdonalds.png" cover="true" alt="sendivc" />
                </AboutImg>
                <TypographyText color="darkgray" bold="true" font="22">Sousage Pizza</TypographyText>
                <Rating
                    name="food-feedback"
                    value={value}
                    size={"small"}
                    readOnly
                    precision={0.5}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                <TypographyText color="darkgray" bold="true" font="20" margin={"4"}>$7.90</TypographyText>

            </AboutCardStyled>
        </AboutCardContent>
    )
}