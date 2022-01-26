import styled from "styled-components";
import { Grid } from "@mui/material"




export const MainStyled = styled(Grid).attrs(()=>({
    container:true,
}))`
    display: flex;
    justify-content: space-between;
`