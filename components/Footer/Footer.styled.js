import styled from "styled-components";



export const FooterContent = styled.footer`
height:${({height})=> height==="true" ? "658px":"500px"} ;
display:flex;
flex-direction:column;
align-items:center;
justify-content: flex-end;
position:relative;
`