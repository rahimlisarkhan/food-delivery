import { Grid } from "@mui/material";
import styled from "styled-components";


export const CategoryContentStyled = styled(Grid).attrs(() => ({
    item: true,
    md: 2
}))`
background-color:${({theme})=>theme.colors.whiteLight1};
height:700px;
padding:50px 28px;
overflow:auto;

`