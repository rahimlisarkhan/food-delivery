import { Box, Grid } from "@material-ui/core"
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
    padding: 40px !important;
`