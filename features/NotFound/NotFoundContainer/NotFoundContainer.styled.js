import { Grid } from "@mui/material";
import styled from "styled-components";


export const NotFoundContainerStyled = styled(Grid).attrs(()=>({
    item:true,
    md:12
}))`
background: red;
height: 800px;
padding: 0 !important;
`