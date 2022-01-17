import styled, { css } from "styled-components";


export const HeaderStyled = styled.header`
    ${({ theme }) => css`
    background: ${theme.colors.whiteLight1};
    padding:${theme.boxModel.padding.large} 60px;
    margin:${theme.boxModel.margin.large} 0;
    color:${theme.colors.grayText1} !important;
    `}
    /* width: 97%; */
    height: 838px;
    border-radius:4px;
`;


export const HeaderTop = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

export const HeaderButtonGroup = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

export const HeaderMenuGroup = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

export const SubTitle = styled.span`
    text-decoration: capitalize !important;
    font-size: ${({ theme }) => theme.font.size.small};
`;



