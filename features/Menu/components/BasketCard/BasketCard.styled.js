import { Box, Button } from "@mui/material";
import styled from "styled-components";


export const BasketCardStyled = styled(Box)`
    border-top: 1px solid ${({ theme }) => theme.colors.whiteLight2};
    height:${({fixed})=> fixed==="true" ? "100px" : "163px"};
    padding:35px 0;
    display: flex;
    /* justify-content: space-; */
    align-items: center;
    position:relative;
`

export const BasketCardInfo = styled(Box)`
margin:0 10px;
width:${({fixed})=> fixed==="true" ? "65%" : "80%"};

`

export const BasketCardButton = styled(Button)`
    min-width:${({fixed})=> fixed==="true" ? "29px" : "41px"} !important;
    height:${({fixed})=> fixed==="true" ? "70px" : "90px"} !important;
    border-radius: 50px !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background:  ${({ theme }) => theme.colors.white} !important;
    color:  ${({ theme }) => theme.colors.grayText2} !important

`

export const BasketCardDelete = styled(Button)`
    min-width: 10px !important;
    height: 10px !important;
    position:absolute !important;
    top: 7px;
    right: -12px;

    svg{
        fill:${({ theme }) => theme.colors.whiteLight2} !important;
    }
    `
