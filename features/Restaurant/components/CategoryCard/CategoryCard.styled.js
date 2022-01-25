import { Box } from "@material-ui/core";
import styled from "styled-components";
import Image from "../../../../components/Image"
import Typography from "../../../../components/Typograph"



export const CategoryCardStyled = styled(Box)`
    height: 40px;
    background-color:${({ active }) =>  active === "true" ? "rgba(214, 54, 38, 0.1)" : "none"};
    border-radius: 4px;
    padding:6px 10px;
    display: flex;
    align-items: center;
    margin-top:30px ;
    cursor:pointer;
    transition:all .2s;

    &:hover{
        background-color: ${({theme})=>theme.colors.mainRedLight};
    }
`

export const CategoryImage = styled(Image).attrs(()=>({
    radius:"50",
    width:"25", 
    height:"25"
}))`
`


export const CategoryTitle = styled(Typography).attrs(({active})=>({
    bold:"true",
    font:"20",
    color:active === "true" ? "red" : "dark"
}))`
margin:0 5px !important;


`



