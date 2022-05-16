
    import styled from "styled-components"; 


    export default function Menu() {
    
        return (
        <Wrapper>
            <div className="Btn-Menu"><p>Accueil</p></div>
            <div className="Btn-Menu"><p>Galerie</p></div>
            <div className="Btn-Menu"><p>Prestations</p></div>
            <div className="Btn-Menu"><p>Contact</p></div>
        </Wrapper>
        );
    };
    
    const Wrapper = styled.div`
    display: flex; 
    justify-content: center;
    width: 100%;
    height: 6rem;

    .Btn-Menu {
        font-size: 32px;
        letter-spacing: 1px;
        margin: 2rem;

    }
    `;

