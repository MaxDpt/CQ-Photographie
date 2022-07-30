import styled from "styled-components"; 
import * as React from 'react';
import { useEffect, useState }from "react";

import Card from "./Card";
export default function Cards() {

    const [isLoading, setIsLoading] = useState(true);
    const [cards, setCards] = useState(null);

    useEffect(() => {
        fetch('http://localhost:1337/api/prestations?populate=*',
        {
            method: 'GET',
            headers: {'Accept': 'Application/json'}
        })
    .then(res => res.json())
    .then(res => {
        setTimeout(() => {
            var data = Array.from(res.data);
            setCards(data);
            setIsLoading(false)
        }, 100)
        })
    }, [])

    return (
    <Wrapper>
        <div className="container1">
      
            {isLoading ? 'Loading...' : cards.map(card => (
            <div className="card">
                <Card {...card.attributes} {...card}/>
            </div>
            ) )}

        </div>
    </Wrapper>
    );
};

const Wrapper = styled.div`

.container1 {
    display: flex;
    margin: auto;
    flex-wrap: wrap;
    justify-content: center;
    width: 70%;
    
}
.card {
    margin: 1.5rem;
}

@media screen and (max-width: 450px) { 
    .container1 {
    width: 100%;
}
.card {
    margin: 0.5rem;
}
}
`;