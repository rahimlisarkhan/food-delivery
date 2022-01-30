import { Box, Grid } from "@mui/material";
import styled from "styled-components";
import Image from "../../../components/Image"


export const Content = styled(Grid).attrs(()=>({
    item:true,
    md:9
}))`
margin: 0 auto !important;
` 

export const ImageContent = styled(Box)`
height: 407px;
margin-top:120px;
border-radius: 100px;
transform:rotate(5deg);
display: relative;
background-color: ${({theme})=>theme.colors.orange};
`

export const ImageDelivery = styled(Image).attrs(()=>({
    height: 700
}))`
position: absolute;
transform:rotate(-5deg);
top: -100px;
`