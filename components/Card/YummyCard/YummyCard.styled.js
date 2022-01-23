import { Card, CardContent } from "@mui/material";
import styled, { keyframes } from "styled-components";
import { css } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const animation = props =>
  css`
    ${pulse} ${props.animationLength} infinite alternate;
  `

export const YummyCardStyled = styled(Card)`
    ${({ top, left }) => css`
    width: 273px;
    height: 85px;
    position: absolute;
    top:${top ? `${top}px` : 0};
    left:${left ? `${left}px` : 0}
    animation: ${rotate} 2s linear infinite;
`}

`


export const CardContentStyled = styled(CardContent)`
display: flex;
align-items: center;
`



