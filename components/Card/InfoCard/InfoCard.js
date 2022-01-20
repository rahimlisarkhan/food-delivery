import * as React from 'react';
import { InfoCardStyled,CardContentStyled } from "./InfoCard.styled"
import TypographyText from '../../Typograph';
import Image from '../../Image';


export const InfoCard = ({ title, img, desc }) => {
  return (
    <InfoCardStyled >
      <CardContentStyled>
        <Image width="300" height="223" cover="true" src={img} alt={title} />
        <TypographyText font="30" bold="true">
          {title}
        </TypographyText>
        <TypographyText color="gray" font="18">
          {desc}
        </TypographyText>
      </CardContentStyled>
    </InfoCardStyled>
  );
}
