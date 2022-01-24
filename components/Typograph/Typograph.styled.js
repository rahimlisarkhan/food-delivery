import { Typography } from "@mui/material";
import styled, { css } from "styled-components";


export const TypographyText = styled(Typography).attrs(() => ({
    // gutterBottom:true, 
    variant: "h6",
    component: "div"
}))`
    padding: 0 !important;
    ${({ theme, font, color, bold, center }) => css`
        color:${() => {
            switch (color) {
                case "dark":
                    return theme.colors.textBlack;
                case "gray":
                    return theme.colors.grayText1;
                case "red":
                    return theme.colors.mainRed;
                case "green":
                    return theme.colors.textGreenLight;
                default:
                    return theme.colors.textBlack;
            }
        }
        } !important;
        font-size:${font ? `${font}px` : theme.font.size.medium} !important;
        text-align:${center ? `center` : "none"} !important;
        font-weight:${bold && `bold`} !important;
        margin:15px 0 !important;
        line-height: 1.3 !important;
        `}
`