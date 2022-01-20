import React from "react"
import { OfferInfo, OfferBox, OfferImage, OfferContent } from "./Offer.styled."
import TypographyText from "../../../components/Typograph"

const Offer = ({ title, desc, img, rotate }) => {

    return (
        <OfferContent rotate={rotate}>
            <OfferInfo>
                <TypographyText font="50" bold="true">
                    {title}
                </TypographyText>
                <TypographyText font="22" color="gray">
                    {desc}
                </TypographyText>
            </OfferInfo>
            <OfferInfo>
                <OfferBox rotate={rotate}>
                    <OfferImage rotate={rotate} src={img} alt="offer" />
                </OfferBox>
            </OfferInfo>
        </OfferContent>
        )
}

export default React.memo(Offer)