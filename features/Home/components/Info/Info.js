import { Fragment } from "react"
import TypographyText from "../../../../components/Typograph"
import { CardCol, InfoTop } from "./Info.styled"
import PropTypes from 'prop-types';
import InfoCard from "../../../../components/Card/InfoCard"


export const Info = ({ title, desc, cards }) => {
    return (
        <Fragment>
            <InfoTop>
                <TypographyText font="40" bold="true" center="true">
                    {title}
                </TypographyText>
                <TypographyText font="22" color="gray" center="true">
                    {desc}
                </TypographyText>
            </InfoTop>
            {cards.map((card, index) => <CardCol key={`info-card-${index}`}>
                <InfoCard  {...card} />
            </CardCol>
            )}
        </Fragment>
    )
}

Info.propTypes ={ 
    title:PropTypes.string.isRequired,
    desc:PropTypes.string.isRequired,
    cards:PropTypes.array.isRequired,
}