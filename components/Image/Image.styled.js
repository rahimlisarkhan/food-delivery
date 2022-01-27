// import Image from "next/image";
import styled from "styled-components";

export const ImageStyled = styled.img.attrs(({width, height})=>({
    width: width || "100%",
    height:height || "100%",
    
}))`
    object-fit:${({cover}) => cover ? "cover" : "normal"};
    border-radius: ${({radius}) => radius ? `${radius}px` : 0};
    /* margin:0 10px; */
    cursor:pointer;
    `
    /* margin:0, ${({theme})=>theme.boxModel.margin.small}  */
