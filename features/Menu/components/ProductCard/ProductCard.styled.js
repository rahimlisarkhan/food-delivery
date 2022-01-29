import { Box } from '@material-ui/core';
import { Button } from '@mui/material';
import styled from 'styled-components';



export const ProductCardStyled = styled(Box)`
    padding:20px;
    height:100px;
    border-top:1px solid ${({ theme }) => theme.colors.whiteLight3};
    display:flex;
    align-items:center;
    justify-content:space-between;
    `



export const ProductCardInfo = styled(Box)`
margin:0 20px;
`

export const ProductCardContent = styled(Box)`
margin:0 10px;
display: flex;
flex-direction: row;
align-items:center;
justify-content:center;
`

export const ProductCardButton = styled(Button).attrs(()=>({
}))`
    min-width: 40px !important;
    height: 40px !important;
    border-radius: 50% !important;
    font-size:24px !important;
    margin-left:35px !important;
    border:1px solid ${({ theme }) => theme.colors.whiteLight3}!important;
    color:  ${({ theme }) => theme.colors.whiteLight3} !important;
    
    &:hover{
        background:  ${({ theme }) => theme.colors.textGreenLight} !important;
        color:  ${({ theme }) => theme.colors.white} !important;

    }
`