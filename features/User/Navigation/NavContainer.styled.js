import { Grid } from "@material-ui/core";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";



export const NavContainerStyled = styled(Grid).attrs(() => ({
    item: true,
    md: 3
}))`
`

export const NavContent = styled(Box)`
padding:40px;
height: 515px;
width:325px;
border-radius: 4px;
background-color: ${({ theme, active }) => active === "true" ? theme.colors.lightRed1 : theme.colors.whiteLight1};
`
export const NavItem = styled(Typography)`
    height: 56px;
    border-radius: 4px;
    padding:12px;
    font-size:20px;
    font-weight:600;
    color: ${({ theme, active }) => active === "true" ? theme.colors.mainRed : theme.colors.grayText1};
    cursor: pointer;
    transition: all .2s;
    display: flex;
    align-items: center;
    background-color: ${({ theme, active }) => active === "true" ? theme.colors.lightRed1 : theme.colors.whiteLight1};
    margin:5px 0;
    svg{
        margin-right: 15px;
    }

    &:hover{
    color:${({ theme }) => theme.colors.white};
    background-color:${({ theme }) => theme.colors.mainRed};
    }
`