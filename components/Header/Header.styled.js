import { Box, Button } from "@mui/material";
import styled, { css,keyframes } from "styled-components";
import Image from "../Image";


export const Content = styled.header`
    ${({ theme,bottom,login }) => css`
    background: ${login ==="true" ? theme.colors.lightRed : theme.colors.whiteLight1};
    padding:${theme.boxModel.padding.normal} 60px;
    margin:${theme.boxModel.margin.normal} 0;
    color:${theme.colors.grayText1} !important;
    height:${bottom === "true" ? "838px" : "102px"} ;
    `}
    border-radius:4px;

`;


export const Top = styled.div`
    display:flex;
    align-items:center;
    margin-top:5px;
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
height: 500px;
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
    color: ${({ theme }) => theme.colors.grayText1}  !important;
    border-color: ${({ theme }) => theme.colors.grayText1} !important;
    text-transform:capitalize !important;
    font-size:  ${({ theme, font }) => font ? `${font}px` : theme.font.size.small}  !important;
    margin:0 ${({ theme }) => theme.boxModel.margin.normal} !important;
    border-radius: 30px !important; 

    &:hover{
        border-color: ${({ theme }) => theme.colors.grayText2} !important;

    }
`



const rotateImg = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360);
  }
  
`;


export const AdImage = styled(Image).attrs(()=>({
    height:650,
}))`
position: absolute;
top: -5%;
left: -15%;
animation: ${rotateImg} 4s linear infinite alternate;

`

