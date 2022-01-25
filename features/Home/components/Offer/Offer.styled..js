import { Grid ,Box} from "@mui/material";
import Image from "../../../../components/Image";
import styled from "styled-components";


export const OfferContent = styled(Grid).attrs(()=>({
    container:true,
}))`
display: flex;
/* flex-direction: ${({rotate})=> rotate === "false" ? "row" : "row-reverse"}; */
flex-direction:row-reverse !important;
margin-top:200px !important;
    /* justify-content: center !important; */
`


export const OfferInfo = styled(Grid).attrs(()=>({
    item:true,
    md:6
}))`
display: flex;
flex-direction: column !important; 
align-items: center !important;
`


export const OfferBox = styled(Box)`
width:420px;
height: 500px;
border-radius:50px;
position:relative;
display:flex;
justify-content: center;
align-items: center;
background-color:${({theme})=>theme.colors.mainRed};
transform:${({rotate})=> rotate === "false" ? "rotate(-150deg)" : "rotate(150deg)"}
`

export const OfferImage = styled(Image).attrs(()=>({
    height: 540
    
}))`
transform:${({rotate})=> rotate === "false" ? "rotate(150deg)" : "rotate(-150deg)"};
`