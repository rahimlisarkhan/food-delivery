import { Box } from "@mui/material";
import styled from "styled-components";

export const FooterTopStyled = styled(Box)`
background-color:${({theme})=>theme.colors.blackLight};
min-width:1066px;
height:372px;
border-radius:50px;
padding:50px;
position:absolute;
top: 10%;
`