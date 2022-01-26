import { Box } from '@material-ui/core';
import styled from 'styled-components';



export const ProductCardStyled = styled(Box)`
    padding:20px 40px;
    height:100px;
    border-top:1px solid ${({ theme }) => theme.colors.whiteLight2}
`