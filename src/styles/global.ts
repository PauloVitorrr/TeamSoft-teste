import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: 0;
}
body{
    background-color: ${(props) => props.theme["white"]};
}
`;
