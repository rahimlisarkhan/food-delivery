import { createGlobalStyle } from "styled-components";
import { colors } from "./color";

const GlobalStyle = createGlobalStyle`
    *{
    box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        background: ${colors.white};
        font-family:'Roboto', sans-serif;
    }

    *::-webkit-scrollbar {
  width: 5px;
}

/* Track */
*::-webkit-scrollbar-track {
  background:  ${colors.white}; 
  /* background:  ${colors.darkBlue_3};  */
}
 
/* Handle */
*::-webkit-scrollbar-thumb {
  background:  ${colors.mainRed}; 
}

/* Handle on hover */
*::-webkit-scrollbar-thumb:hover {
  background:  ${colors.mainRed}; 
}

/* Make clicks pass-through */
#nprogress {
    pointer-events: none;
  }
  
  #nprogress .bar {
    background: linear-gradient(180deg, ${colors.mainRed} 0%, ${colors.mainRed} 100%);
    position: fixed;
    z-index: 1300;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
  }
  
  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px ${colors.mainRed}, 0 0 5px ${colors.mainRed};
    opacity: 1;
  
    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
  }
  
  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }
  
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }

`;
export default GlobalStyle