import { Card, CardContent } from "@mui/material";
import styled from "styled-components";


export const InfoCardStyled = styled(Card)`
width: 327px;
height: 395px;
transition: all .2s !important;

&:hover{
    transform:scale(.98)
}
`


export const CardContentStyled = styled(CardContent)`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;


`