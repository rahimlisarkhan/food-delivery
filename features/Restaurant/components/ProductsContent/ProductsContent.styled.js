import { Grid } from "@material-ui/core"
import styled from "styled-components"


export const ProductsContentStyled = styled(Grid).attrs(()=>({
    item:true,
    md:8
}))`
    background-color:${({theme})=>theme.colors.whiteLight1};
    height: 800px;
    overflow: auto;
    margin-top:50px !important;
    padding: 40px !important;
    border-radius: 4px;
`