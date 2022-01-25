import { Box, Grid } from "@material-ui/core";
import styled from "styled-components"
import Image from "../../../../components/Image"

export const MenuHeaderStyled = styled(Grid).attrs(() => ({
    item: true,
    md: 12
}))`
height:540px;
padding: 0;
`

export const MenuImage = styled(Image).attrs(() => ({
    cover: true
}))`
height: 450px;

`

export const MenuContent = styled(Box)`
display:flex;
justify-content:space-between;
`


export const MenuInfo = styled(Box)`
height: 90px;
padding:20px;
display:flex;
justify-content:space-between;
`

export const InfoTitle = styled(Box)`
margin-right:40px;

`

export const InfoDelivery = styled(Box)`
display:flex;
justify-content:center;
align-items:center;
text-align:left;
padding:10px;
width:72px;
height:61px;
border:1px solid ${({theme})=>theme.colors.mainRed};
color:${({theme})=>theme.colors.mainRed};
font-size: ${({theme})=>theme.font.size.extraSmall};
`
