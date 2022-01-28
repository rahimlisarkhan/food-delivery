import { Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import styled from "styled-components";



export const OrdersContainerStyled = styled(Grid).attrs(() => ({
    item: true,
    md: 9
}))`
`

export const OrdersContent = styled(Box)`
padding:40px;
height: 735px;
border-radius: 4px;
background-color: ${({ theme }) => theme.colors.whiteLight1};
`
