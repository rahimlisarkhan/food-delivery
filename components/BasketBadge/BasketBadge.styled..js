import Badge from '@mui/material/Badge';
import styled, { css } from 'styled-components';

export const StyledBadge = styled(Badge)`
${({ theme }) => css`
background: ${theme.colors.mainRed};
width: 40px;
height: 40px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
  & svg{
    fill:white;
  }

  & .MuiBadge-badge {
      right: -3;
      top: 13;
      background: ${theme.colors.mainRed};
      border: 2px solid ${theme.colors.white};
      padding: 0 4px;
    },
  
  `};

`