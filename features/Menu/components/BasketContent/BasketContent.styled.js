import { Box, Button, Grid } from "@material-ui/core"
import styled from "styled-components"


export const BasketContentStyled = styled(Grid).attrs(()=>({
    item:true,
    md:3,
}))`
    display: flex;
    justify-content: flex-end;
    height: 800px;
`

export const BasketStyled = styled(Box)`
    position: sticky;
    top:0;
    right:0;
    width: 400px;
    height: 547px;
    background-color:${({theme})=>theme.colors.whiteLight1};
    border-radius: 4px;
    padding:15px !important;
    box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.2);
`

export const BasketListContent = styled(Box)`
height: 400px;
margin-bottom: 20px;
overflow-x: hidden;
overflow-y: auto;
`


export const CheckoutButton = styled(Button)`
    width:100%;
    height: 47px;
    background-color:${({theme})=>theme.colors.mainRed} !important;
    color:${({theme})=>theme.colors.white} !important;
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
    background-color:${({theme})=>theme.colors.white};
    color:${({theme})=>theme.colors.mainRed} !important;
    display: flex;
    justify-content: center;
    font-weight: 600;
    align-items: center;
    font-size: 16px;
`