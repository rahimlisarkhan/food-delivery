import { Box, Button } from "@mui/material";
import styled from "styled-components";


export const BasketCardStyled = styled(Box)`
    border-top: 1px solid ${({ theme }) => theme.colors.whiteLight2};
    height:100px;
    padding:35px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const BasketCardInfo = styled(Box)`
`

export const BasketCardButton = styled(Button)`
    min-width: 29px !important;
    height: 62px !important;
    border-radius: 50px !important;
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background:  ${({ theme }) => theme.colors.mainRed} !important;
    color:  ${({ theme }) => theme.colors.grayText2} !important;
`