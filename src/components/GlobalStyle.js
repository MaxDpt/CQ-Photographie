import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
    body {
        background: rgb(2,17,31);
        background: linear-gradient(90deg, rgba(2,17,31,1) 0%, rgba(71,85,94,1) 25%, rgba(71,85,94,1) 75%, rgba(2,17,31,1) 100%);
        color: white;
    }
`;

export default GlobalStyle;