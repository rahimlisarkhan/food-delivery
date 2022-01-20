import * as React from 'react';
import {CardContentStyled, YummyCardStyled} from "./YummyCard.styled"
import CardContent from '@mui/material/CardContent';
import TypographyText from '../../Typograph';
import Image from '../../Image';


export  const YummyCard = ({title,img,top,left}) => {
  return (
    <YummyCardStyled top={top} left={left}>
      <CardContentStyled>
          <Image width="70" height="50" cover="true" src={img} alt={title}/>
          <TypographyText color="dark" font="12" bold="true">
                {title}    
          </TypographyText>    
      </CardContentStyled>
    </YummyCardStyled>
  );
}
