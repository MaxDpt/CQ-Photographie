
    import styled from "styled-components"; 
    import React from "react";

    

    const Card = ({
        title = '',
        description = '',
        prix = '',
        image ='',
    }) => {
    
    return (
    <Wrapper>
        <div className="container">
            <div className="card">
                <div className="row1"><h2 className="titre">{title}</h2></div>
                <div className="row2"><p className="description">{description}</p></div>
                <div className="row3"><p className="prix">{prix} euro</p></div>
            </div>
            <div className="image">
                <img className="image" src={'http://localhost:1337'+image.data.attributes.url} />
            </div>
        </div>
    </Wrapper>
    );
    };
    
    const Wrapper = styled.div`

    .container {
        border: 2px solid white;
        border-radius: 2px;
        display: flex;
        width: 30rem; 
        height: 40rem;
        overflow: hidden; 
        flex-direction: column;}
    .container:hover {
        cursor: pointer;
    }
    .card { 
        z-index: 1;}

    .row1, .row2, .row3 {
        display: flex; 
        width: 100%; 
        justify-content: center;}

    .row1 {
        font-size: 4.2rem;}

    .row2 {
        font-size: 1.6rem;}

    .row3 {
        font-size: 4.2rem;}

    .description {
        margin-top: 6rem;
        height: 20rem;}

    .prix {
        margin-top: 2.5rem;
        margin-bottom: 1rem;}

    .image {
        opacity: 65%;
        width: 70rem;
        position: relative;
        top: -22rem;
        left: -8rem;}

    `;
    export default Card;
