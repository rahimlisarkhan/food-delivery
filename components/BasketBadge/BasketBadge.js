import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { StyledBadge } from './BasketBadge.styled.';


export  const BasketBadge = ({count}) => {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={count} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
