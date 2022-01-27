import {Tabs,Tab} from '@mui/material';
import styled from 'styled-components';


export const TabsStyled = styled(Tabs)`
& .MuiTabs-scroller{
  display: flex;
  justify-content: center;
}
& .Mui-selected{
  color:${({theme})=>theme.colors.lightRed} !important;
  /* font-weight: 600 !important; */
 }
 & .MuiTabs-indicator{
  background:${({theme})=>theme.colors.lightRed} !important;
 }
`

export const TabStyled = styled(Tab)`

font-size: 30px;
letter-spacing: 3%;
color:${({theme})=>theme.colors.grayText1};
text-transform: capitalize !important;
 
`