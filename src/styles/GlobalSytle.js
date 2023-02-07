import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Poppins', sans-serif;
        text-decoration: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        color: #33373d;
    }

    #root{
        height: 100vh;
    }

    .App{
        height: 100%;
        width: 100%;
    }
`;

