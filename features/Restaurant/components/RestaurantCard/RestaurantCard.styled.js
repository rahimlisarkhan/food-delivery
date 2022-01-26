

import { Button, CardActions, CardContent, Grid, Card, CardMedia } from '@mui/material';
import styled, { css } from 'styled-components'



export const CardContentStyled = styled(CardContent)`
    ${({ theme }) => css`
        padding: 0 16px !important;
    `}
`
export const CardCol = styled(Grid).attrs(() => ({
    item: true,
    xs:6,
    md: 4,
    lg:3
}))`
`

export const CardStyled = styled(Card)`
min-width:235px;
height: 345px;
margin: 0 0 40px 40px;
padding:17px 0;
background-color: ${({ theme }) => theme.colors.white};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)!important;
 transition: all .2s !important;
     cursor: pointer;
     &:hover{
         transform: scale(.98);
     }
`

export const CardImage = styled(CardMedia).attrs(() => ({
    component: "img",
}))`
    width: 100%;
    height:160px;
    object-fit:cover;
`


export const CardActionsStyled = styled(CardActions)`
        padding: 0 16px !important;
        justify-content: space-between !important;

`

export const ButtonDeleteStyled = styled(Button)`
    padding:0;
    justify-content: flex-end;
`