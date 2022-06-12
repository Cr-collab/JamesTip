import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --background: #101010;
   
    --text-title: #FFFFFF;
    --text-body: #FFFFFF;
    --shape: #565656;
    --green : #00CFB3;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{ 
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }
    @media (max-width:777px){
        font-size: 87.5%;
    }

    @media (max-width:683px){
        font-size: 60.5%;
    }

    @media (max-width:480px){
        font-size: 50.5%;
    }
}
body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}
body , textarea , input , button{
    font-family: Poppins , sans-serif;
    font-weight: 400;
}
h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
}
button{ 
    cursor: pointer;
}
[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}


`;
