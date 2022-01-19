import { Box, Button } from "@mui/material";
import styled, { css } from "styled-components";
import Image from "../Image";


export const Content = styled.header`
    ${({ theme }) => css`
    background: ${theme.colors.whiteLight1};
    padding:${theme.boxModel.padding.normal} 60px;
    margin:${theme.boxModel.margin.normal} 0;
    color:${theme.colors.grayText1} !important;
    `}
    /* width: 97%; */
    height: 838px;
    border-radius:4px;
`;


export const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`;


export const ButtonGroup = styled.div`
    display:flex;
    align-items:center;
    margin:${({ theme, margin }) => margin && "45px"} 0;
`;

export const MenuGroup = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`;


export const Bottom = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

export const Info = styled(Box)`
flex:1;

`;

export const BottomImage = styled(Box)`
flex:1;
height: 550px;
background: ${({theme})=>theme.colors.black};
border-radius: 80px;
margin:80px 0 0 40px ;
position: relative;
`;


export const ButtonOutline = styled(Button).attrs(() => ({
    variant: "outlined",
}))`
    width: ${({ width }) => width ? `${width}px` : "auto"};
    height: ${({ height }) => height ? `${height}px` : "auto"};
    color: ${({ theme }) => theme.colors.grayText1};
    border-color: ${({ theme }) => theme.colors.grayText1};
    text-transform:capitalize;
    font-size:  ${({ theme, font }) => font ? `${font}px` : theme.font.size.small};
    margin:0 ${({ theme }) => theme.boxModel.margin.normal};
    border-radius: 30px; 

    &:hover{
        border-color: ${({ theme }) => theme.colors.grayText2};

    }
   
`

export const AdImage = styled(Image)`
max-width: 900px;
height: 650px;
position: absolute;
top: -5%;
left: -12%;

`