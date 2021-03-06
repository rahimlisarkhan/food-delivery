import { Box, Grid } from "@material-ui/core";
import styled from "styled-components"
import Image from "../../../../components/Image"

export const MenuHeaderStyled = styled(Grid).attrs(() => ({
    item: true,
    md: 12
}))`
height:600px;
`

export const MenuImage = styled(Image).attrs(() => ({
    cover: true
}))`
height: 450px;

`
export const MenuContent = styled(Box)`
display:flex;
justify-content:space-between;
align-items:center;

`


export const MenuInfo = styled(Box)`
height: 90px;
padding:5px 50px;
display:flex;
border-bottom:1px solid ${({theme})=>theme.colors.whiteLight};
justify-content:space-between;
align-items:center;
`

export const InfoTitle = styled(Box)`
margin-right:40px;

`

export const InfoDelivery = styled(Box)`
display:flex;
justify-content:center;
align-items:center;
text-align:left;
padding:5px;
width:72px;
height:52px;
margin-left:30px;
border-radius: 5px;
cursor:pointer;
border:1px solid ${({theme})=>theme.colors.mainRed};
background-color:${({theme,back})=>back ? theme.colors.mainRed : theme.colors.white};
color:${({theme,back})=>back ? theme.colors.white :theme.colors.mainRed};
font-size: ${({theme})=>theme.font.size.extraSmall};
`
