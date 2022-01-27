import { Box } from "@material-ui/core";
import { Button as ButtonEye, FormGroup, FormHelperText, InputLabel, TextField } from "@mui/material";
import Button from "../../../../components/Button"
import styled from "styled-components";



export const LoginFormContent = styled(Box)`

`
export const FormStyled = styled.form``

export const FormGroupStyled = styled(FormGroup)`
margin-bottom: 10px;
position: relative;
`


export const FormLabel = styled(InputLabel)`
font-size: 20px;
font-weight: 600;
color:${({theme})=>theme.colors.grayText2}
margin-bottom:10px;
`



export const FormField = styled(TextField).attrs(()=>({
    variant:"filled",
    autoFocus:false,
    color:"error",
    fullWidth:true
}))`
    height: 70px !important;
    border-radius: 5px;
    & .MuiInputBase-input{
        background: ${({theme})=>theme.colors.lightRed1};
    }

    & .Mui-focused{
      font-size: 18px;
    }
`

export const FormError = styled(FormHelperText)`
        color: ${({theme})=>theme.colors.lightRed} !important;
        font-size: 14px;

`

export const FormSubmit = styled(Button).attrs(()=>({
    type:"submit"
}))`
        width: 100%;
        height: 68px;
        border-radius:5px !important;
        font-size:22px !important;
        margin-top:50px !important;
        background: ${({theme})=>theme.colors.lightRed} !important;
        `

export const FormPasswordEye = styled(ButtonEye).attrs(()=>({
    variant:"text",
}))`

position:absolute;
top:40px;
right:0;
svg{
    fill:${({theme})=>theme.colors.black}
}
`