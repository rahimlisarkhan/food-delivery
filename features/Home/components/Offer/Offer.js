import React from "react"
import { OfferInfo, OfferBox, OfferImage, OfferContent } from "./Offer.styled."
import TypographyText from "../../../../components/Typograph"
import PropTypes from 'prop-types';

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
                    <OfferImage width="500"  rotate={rotate} src={img} alt="offer" />
                </OfferBox>
            </OfferInfo>
        </OfferContent>
        )
}

export default React.memo(Offer)


Offer.propTypes ={ 
    title:PropTypes.string.isRequired,
    desc:PropTypes.string.isRequired,
    img:PropTypes.string.isRequired,
    rotate:PropTypes.string.isRequired,
}