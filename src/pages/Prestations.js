import styled from "styled-components"; 
import * as React from 'react';
import Cards from "components/Cards";

export default function Prestations() {

    return (
    <Wrapper>
        <div className="C-Title">
            <h2 className="title">Nos prestations</h2>
        </div>
        
        <Cards />
    </Wrapper>
    );
};

const Wrapper = styled.div`
.C-Title {
    display: flex;
    width: 100%;
    justify-content: center;
}
.title {
    margin: 1rem;
    font-size: 2.2rem;
}
@media screen and (max-width: 450px) { 
    .C-Title {
        margin-top: -3rem;
}
}`;