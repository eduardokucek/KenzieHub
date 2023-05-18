import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        line-height: 150%; 
        text-decoration: none;
        font-family: 'Inter', sans-serif;
    }   

    body, html {
        height: 100vh;
        width: 100vw;
        background-color: var(--color-grey-4);
    }
    
    button {
        border: none;
        border-radius: var(--radius-default);
        color: #ffffff;
        cursor: pointer;
    }

    input {
        outline: none;
        border-radius: var(--radius-default);
    }  

    :root {
        --color-primary: #ff577f;
        --color-primary-focus: #ff427f;
        --color-primary-negative: #59323f;
        --color-grey-4: #121214;
        --color-grey-3: #212529;
        --color-grey-2: #343b41;
        --color-grey-1: #868e96;
        --color-grey-0: #f8f9fa;
        --sucess: #3fe864;
        --negative: #e83f5b;
        --radius-default: 4px;
    }
`;
