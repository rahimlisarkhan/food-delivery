

import { Button, CardActions, CardContent, Grid } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import styled, { css } from 'styled-components'



export const CardContentStyled = styled(CardContent)`
    ${({theme})=>css`
        padding: 0 16px
    `}

`

export const Card = styled(Grid).attrs(()=>({
    item:true,
    md:3,
    m:3
}))`
width:235px !important;
height: 346px !important;
background-color: ${({theme})=>theme.colors.white};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 transition: all .2s;
     cursor: pointer;
     &:hover{
         transform: scale(.98);
     }
`


export const CardImage = styled(CardMedia).attrs(()=>({
    component:"img",
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