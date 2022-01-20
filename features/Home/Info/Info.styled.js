import styled from "styled-components";
import { Grid } from "@mui/material"




export const InfoTop = styled(Grid).attrs(()=>({
    item:true,
    md:12
}))`
margin-top:40px !important;
`


export const CardCol = styled(Grid).attrs(()=>({
    item:true,
    md:4
}))`
display: flex;
justify-content: center;
`