import { MenuHeaderStyled, MenuImage, MenuInfo, InfoTitle, MenuContent,InfoDelivery } from "./MenuHeader.styled"
import TypographyText from "../../../../components/Typograph"



export const MenuHeader = ({ img_url }) => {
    return (
        <MenuHeaderStyled>
            <MenuImage src={img_url} />
            <MenuInfo>
                <InfoTitle>
                    <TypographyText font="22" bold="true">Papa John’s Pizza Restaurant</TypographyText>
                    <TypographyText font="16" color="gray">19 Nizami street, Sabail, Baku</TypographyText>
                </InfoTitle>
                <MenuContent>
                    <InfoTitle>
                        <TypographyText font="18" color="gray">Cuisine</TypographyText>
                        <TypographyText font="14" color="gray">pizza, drink, hotdog, sendvich, roll</TypographyText>
                    </InfoTitle>
                    <InfoDelivery>
                        $5 Delivery
                    </InfoDelivery>
                </MenuContent>
            </MenuInfo>
        </MenuHeaderStyled>
    )
}