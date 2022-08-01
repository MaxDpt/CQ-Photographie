
import styled from "styled-components"; 
import Header from "./Header";
import Menu from "./Menu";

// RENDU ------------------------------------------------------
export default function Layout({ children }) {
    return (
    <Wrapper>
        <Header/>
        <Menu/>
        {children}
    </Wrapper> );
};
// STYLE CSS --------------------------------------------------
const Wrapper = styled.div`

display: flex;
flex-direction: column;
width: 100%;
justify-content: center;

    `;

