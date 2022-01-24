import { Grid } from "@mui/material";
import styled from "styled-components";


export const RestaurantContentStyled = styled(Grid).attrs(() => ({
    item: true,
    md: 10
}))`
padding:50px 28px;
`

export const RestaurantList = styled(Grid).attrs(() => ({
    container: true,
    spacing:2
}))`
`