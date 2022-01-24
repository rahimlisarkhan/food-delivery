import { useRouter } from 'next/router';
import * as React from 'react';
import Button from '../../../../components/Button';
import TypographyText from '../../../../components/Typograph';
import * as Style from './RestaurantCard.styled';

export const RestaurantCard = ({ id, name, price, img_url, restaurant }) => {

  let { push, asPath } = useRouter()

  console.log(asPath);
  const openRestaurant = () => {
    push(asPath + "/burger-king")
  }

  return (
    <Style.Card onClick={openRestaurant}>
      <Style.CardImage
        image={"https://logowik.com/content/uploads/images/310_burgerking.jpg"}
        alt="pizza"
      />
      <Style.CardContentStyled>
        <TypographyText font="22" color="dark" bold="true">
          Burger King
        </TypographyText>
        <TypographyText font="16" color="gray">
          chinese, sea-food, thai, lebanese, caribbean
        </TypographyText>
      </Style.CardContentStyled>
      <Style.CardActionsStyled>
        <TypographyText font="16" bold="true">
          $1 Delivery
        </TypographyText>
        <Button>30 Min</Button>
      </Style.CardActionsStyled>
    </Style.Card>

  );
}
