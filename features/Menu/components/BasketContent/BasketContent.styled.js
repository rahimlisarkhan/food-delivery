import { Box, Grid } from "@material-ui/core"
import { Button } from "@mui/material";
import styled, { css } from "styled-components"


export const BasketContentStyled = styled(Grid).attrs(({ fixed }) => ({
    item: true,
    md: fixed === "true" ? 3 : 12,
}))`
    display: flex;
    justify-content: flex-end;
    height: 800px;
`

export const BasketStyled = styled(Box)`
    ${({ fixed, theme }) => {
        console.log(fixed);

        if (fixed === "true") {
            console.log("oxuyur");
            return css`
            position: sticky !important;
            top:0 !important;
            right:0!important;
            width: 400px;
            height: 547px;
            box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.2);
            background-color:${theme.colors.whiteLight1};
            border-radius: 4px;`
        }
    }}
    
        width: 100%;
        padding:15px !important;
    `

export const BasketListContent = styled(Box)`
height:${({ fixed }) => fixed === "true" ? "400px" : "470px"};
margin-bottom: 20px;
overflow-x: hidden;
overflow-y: auto;
`


export const CheckoutButton = styled(Button)`
    width:100%;
    height: 47px;
    background-color:${({ theme, empty }) => empty ? theme.colors.whiteLight3 : theme.colors.mainRed} !important;
    color:${({ theme }) => theme.colors.white} !important;
    border-radius: 100px !important;
    padding:2px 2px 2px 24px !important;
    display: flex;
    justify-content: space-between !important;
    transition: all .2s !important;

    &:hover{
        transform:scale(.98) !important;
    }


`

export const CheckoutInfo = styled(Box)`
    width: 135px;
    height: 43px;
    border-radius: 100px !important;
    background-color:${({ theme }) => theme.colors.white};
    color:${({ theme, empty }) => empty ? theme.colors.whiteLight3 : theme.colors.mainRed} !important;
    display: flex;
    justify-content: center;
    font-weight: 600;
    align-items: center;
    font-size: 16px;
`