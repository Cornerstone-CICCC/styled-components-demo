import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html{
        *{
            margin: 0;
            box-sizing: border-box
        }
        body{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        button{
            border-radius: 6px;
        }
    }
`;
