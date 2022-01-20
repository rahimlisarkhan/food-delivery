import { Card, CardContent } from "@mui/material";
import styled from "styled-components";


export const YummyCardStyled = styled(Card)`
width: 273px;
height: 85px;
position: absolute;
top:${({top})=> top ? `${top}px` : 0};
left:${({left})=> left ? `${left}px` : 0}
`


export const CardContentStyled = styled(CardContent)`
display: flex;
align-items: center;
`