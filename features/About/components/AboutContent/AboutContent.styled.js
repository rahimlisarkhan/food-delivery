import { Box, Grid } from "@mui/material";
import styled from "styled-components";


export const Content = styled(Grid).attrs(()=>({
    item:true,
    md:12,
}))`
margin-top: 40px;
` 
export const ContentRow = styled(Grid).attrs(()=>({
    container:true,
}))`
` 

export const TitleContent = styled(Grid).attrs(()=>({
    item:true,
    md:5,
}))`
padding-left:58px;
` 


export const ProductContent = styled(Grid).attrs(()=>({
    item:true,
    md:7
}))`
display:flex;
justify-content: center;
margin-top: 50px;

` 




export const ImageContent = styled(Box)`
width: 400px;
height: 687px;
border-radius: 100px;
transform:rotate(25deg);
background-color: ${({theme})=>theme.colors.orange};
`
