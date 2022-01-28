import { Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import styled from "styled-components";



export const CheckoutContainerStyled = styled(Grid).attrs(() => ({
    item: true,
    md: 9
}))`
`

export const CheckoutContent = styled(Box)`
padding:40px;
height: 735px;
background-color: ${({ theme }) => theme.colors.whiteLight1};
`