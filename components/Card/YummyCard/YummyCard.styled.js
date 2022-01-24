import { Card, CardContent } from "@mui/material";
import styled, { keyframes } from "styled-components";
import { css } from "styled-components";



export const YummyCardStyled = styled(Card)`
    ${({ top, left }) => css`
    width: 273px;
    height: 85px;
    position: absolute;
    top:${top ? `${top}px` : 0};
    left:${left ? `${left}px` : 0};
    animation: ${scale} 4s linear infinite alternate;
`}

`
const scale = keyframes`
  from {
    transform: scale(.95);
  }

  to {
    transform: scale(1.1);
  }
`;


export const CardContentStyled = styled(CardContent)`
display: flex;
align-items: center;
`



