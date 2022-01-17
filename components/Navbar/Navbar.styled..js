import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import Link from 'next/link';



export const NavList = styled(Box)`
    backkground:red;
    display:flex;
    align-items:center;
    text-align:center;
    padding: 0 60px;
    text-transform: capitalize;
`

export const NavItem = styled(Typography)`
min-width:100px;
font-weight:${({ active }) => active === "true" && 700};
color:${({ theme, active }) => active === "true" && theme.colors.lightRed};
cursor:pointer;
transition: all .2s;

&:hover{
    color:${({ theme }) => theme.colors.lightRed};
}
`