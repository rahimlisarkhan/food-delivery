import { Grid } from "@mui/material";
import styled from "styled-components";



export const LoginImageContent = styled(Grid).attrs(()=>({
    item:true,
    sm:12,
    md:6
}))`
background: ${({theme})=>theme.colors.lightRed};
min-height: 100vh;
padding: 40px;
margin-bottom:20px;
border-radius: 5px;
`

export const LoginFormContent = styled(Grid).attrs(()=>({
    item:true,
    sm:12,
    md:6
}))`
padding: 40px;
margin-bottom:20px;
`