
    import styled from "styled-components"; 
    import * as React from 'react';
    import { Link } from "react-router-dom";


    export default function Menu() {

        var urlcourante = document.location.href;
        var urlAccueil = 'http://localhost:3000/';
        var urlGalerie = 'http://localhost:3000/Galerie';
        var urlPrestations = 'http://localhost:3000/Prestations';
        var urlContact = 'http://localhost:3000/Contact';

        return (
        <Wrapper>
            <Link className={`link ${urlcourante === urlAccueil ? "show-link" : "hide-link"} `} to ="/"> <h1>Accueil</h1> </Link>
            <Link className={`link ${urlcourante === urlGalerie ? "show-link" : "hide-link"} `} to ="/Galerie"> <h1>Galerie</h1>  </Link>
            <Link className={`link ${urlcourante === urlPrestations ? "show-link" : "hide-link"} `} to ="/Prestations"> <h1>Prestations</h1> </Link>
            <Link className={`link ${urlcourante === urlContact ? "show-link" : "hide-link"} `} to ="/Contact"> <h1>Contact</h1>  </Link>
        </Wrapper>
        );
    };
    
    const Wrapper = styled.div`
    display: flex; 
    justify-content: center;
    width: 100%;
    height: 6rem;

    .link {
        color: white;
        font-size: 42px;
        letter-spacing: 1px;
        margin: 2rem;
        text-decoration: none;

    }
    .show-link {
        color: grey;
    }
    `;

