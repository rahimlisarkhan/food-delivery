import styled from "styled-components";
import { Grid } from "@mui/material"




export const InfoTop = styled(Grid).attrs(()=>({
    item:true,
    md:12
}))`
margin: 0 auto !important;
`


export const CardCol = styled(Grid).attrs(()=>({
    item:true,
    md:4
}))`
display: flex;
justify-content: center;
`