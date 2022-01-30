import { Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import styled from "styled-components";

export const BasketContainerStyled = styled(Grid).attrs(() => ({
    item: true,
    md: 9
}))`
background-color: ${({ theme }) => theme.colors.whiteLight1};
padding:40px;
height: 735px;
`
