import { Box } from "@material-ui/core";
import { Card } from "@mui/material";
import styled from "styled-components";
import { css } from "styled-components";

export const AboutCardContent= styled(Box)`
    position: absolute;
    transition: all .2s;
    cursor: pointer;
    ${({ top, left }) => css`
        top: ${top ? `${top}px` :"0"} !important;
        left: ${left ? `${left}px` :"0"} !important;
    `}

    &:hover{
        transform:scale(.97) !important;
    }
`


export const AboutCardStyled = styled(Box)`
    width: 274px;
    height: 174px;
    transform: rotate(-25deg);
    position: relative;
    padding:60px 25px 25px 25px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 20px;
    box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.2);
`

export const AboutImg = styled(Box)`
    position: absolute;
    top: -50px;
    right: 30px;
    box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.2);
    width: 120px;
    height: 120px;
    border-radius: 50%;
    z-index: 10;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:5px;
    background: ${({ theme }) => theme.colors.white};

    `