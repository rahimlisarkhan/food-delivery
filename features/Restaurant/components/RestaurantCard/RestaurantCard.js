import { useRouter } from 'next/router';
import * as React from 'react';
import Button from '../../../../components/Button';
import TypographyText from '../../../../components/Typograph';
import * as Style from './RestaurantCard.styled';

export const RestaurantCard = ({ name, delivery_price, delivery_min, img_url, cuisine, category, slug }) => {

  let { push, asPath, query } = useRouter()

  const openRestaurant = () => {
    let path = query.category ? asPath + `&name=${slug}` : asPath + `/restaurant/?name=${slug}`
    push(path)
  }

  return (
    <Style.CardCol>
      <Style.CardStyled onClick={openRestaurant}>
        <Style.CardImage
          image={img_url}
          alt={name}
        />
        <Style.CardContentStyled>
          <TypographyText font="22" color="dark" bold="true">
            {name}
          </TypographyText>
          <TypographyText font="16" color="gray">
            {cuisine}
          </TypographyText>
        </Style.CardContentStyled>
        <Style.CardActionsStyled>
          <TypographyText font="15" bold="true">
            {delivery_price ? `$${delivery_price}` : "Free"} Delivery
          </TypographyText>
          <Button>{delivery_min} Min</Button>
        </Style.CardActionsStyled>
      </Style.CardStyled>
    </Style.CardCol>
  );
}
