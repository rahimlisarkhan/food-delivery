import styled from "styled-components";
import { Grid } from "@mui/material"




export const PaginationContent = styled(Grid).attrs(()=>({
    container:true,
}))`
justify-content: center;
    margin-top:30px !important;
    & button{
        width:64px;
        height:64px;
        font-size: 18px;
        border-radius: 50%;
        color:${({theme})=>theme.colors.mainRed};
        border-color:${({theme})=>theme.colors.mainRed};

        &:hover{
            border-color:${({theme})=>theme.colors.textGreenLight} !important;
        background-color:${({theme})=>theme.colors.textGreenLight} !important;
        color:${({theme})=>theme.colors.white} !important;
        }
    }

    & .Mui-selected{
        background-color:${({theme})=>theme.colors.mainRed} !important;
        color:${({theme})=>theme.colors.white} !important;

        &:hover{
        background-color:${({theme})=>theme.colors.textGreenLight} !important;
        }
    }

    
`