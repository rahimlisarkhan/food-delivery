import { Button } from "@mui/material";
import styled from "styled-components";


export const ButtonStyled = styled(Button).attrs(() => ({
    variant: "contained",
}))`
    width: ${({ width }) => width ? `${width}px` : "auto"};
    height: ${({ height }) => height ? `${height}px` : "auto"};
    text-transform:capitalize;
    font-size:  ${({ theme, font }) => font ? `${font}px` : theme.font.size.small} !important;
    /* font-weight:  ${({ bold }) => bold && `500`}; */
    background-color: ${({ theme, color }) => {
        switch (color) {
            case "red":
                return theme.colors.mainRed
            default:
                return theme.colors.mainRed
        }
    }
    } !important;
    /* margin:0 ${({ theme }) => theme.boxModel.margin.normal}; */
    border-radius: 30px !important; 

    &:hover{
        background-color: ${({ theme }) => theme.colors.lightRed} !important;
    }
`
