
    import styled from "styled-components"; 
    import GlobalStyle from "./GlobalStyle";

    import Header from "./Header";
    import Menu from "./Menu";

    export default function Layout({ children }) {
    
        return (
        <Wrapper>
            <GlobalStyle/>
            <Header/>
            <Menu/>
           {children}
        </Wrapper>
        );
    };
    
    const Wrapper = styled.div``;

