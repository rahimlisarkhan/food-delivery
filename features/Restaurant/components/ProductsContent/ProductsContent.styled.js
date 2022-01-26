import { Grid } from "@material-ui/core"
import { Box } from "@mui/material"
import styled from "styled-components"


export const ProductsContentStyled = styled(Grid).attrs(()=>({
    item:true,
    md:9
}))`
    padding-right:50px;
`

export const ProductsStyled = styled(Box)`
    background-color:${({theme})=>theme.colors.whiteLight1};
    height: 800px;
    overflow: auto;
    padding: 40px !important;
    border-radius: 4px;
`