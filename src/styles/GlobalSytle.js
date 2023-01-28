import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Display:ital,wght@0,100;0,400;0,700;1,900&family=Ubuntu:wght@400;700&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Noto Sans Display', sans-serif;
        text-decoration: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #root{
        height: 100vh;
    }

    .App{
        height: 100%;
        width: 100%;
    }
`;

