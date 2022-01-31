import { Box, FormGroup, TextField } from "@mui/material";
import styled from "styled-components";



export const FormContent  = styled.form`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`

export const FormGroupStyled  = styled(FormGroup)`
width: 45%;
margin-bottom: 50px;
`


export const Field = styled(TextField).attrs(()=>({
    hiddenLabel:true,
    color:"success",
    variant:"filled",
    size:"normal",
    fullWidth:true

}))`
height: 53px;
background-color: yellow !important;
  
`