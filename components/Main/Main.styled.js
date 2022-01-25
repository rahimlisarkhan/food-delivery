import styled from "styled-components";
import { Grid } from "@mui/material"




export const MainStyled = styled(Grid).attrs(()=>({
    container:true,
    spacing:3
}))`
    padding:${({theme})=>theme.boxModel.padding.normal} 25px;
    min-height:100vh;
`