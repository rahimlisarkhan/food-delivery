import { Avatar, MenuItem } from "@mui/material";
import styled from "styled-components";


export const AvatarStyled = styled(Avatar)`
    width: 40px;
    height: 40px;
`

export const MenuItemStyled = styled(MenuItem)`

    color: ${({ theme }) => theme.colors.grayText2};
    svg{
        margin-right: 10px;
    }
`