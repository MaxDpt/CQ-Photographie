import styled from "styled-components"; 
import React, { useState, useEffect } from "react";
import Formulaire from "components/Formulaire";
import Image from "components/Image";
export default function Contact() {

    const [isLoading, setIsLoading] = useState(true);
    const [couverture, setCouverture] = useState(null);

// Appel API ---------------------------------------------------------------
useEffect(() => {
    fetch('http://localhost:1337/api/logos/3?populate=*',
    {
        method: 'GET',
        headers: {'Accept': 'Application/json'}
    })
.then(res => res.json())
.then(res => {
    
    var data = Array(res.data);
    setCouverture(data);
    setIsLoading(false)
    
    })
}, [])
// -------------------------------------------------------------------------

    return (
    <Wrapper>
        <div className="containerImage">
        {isLoading ? '' : couverture.map(image => (
        <div className="image">
            <Image {...image.attributes}/>
        </div>
        ) )}
        </div>
   

        <div className="Formulaire"><Formulaire/></div>
        
    </Wrapper>
    );
};

const Wrapper = styled.div`
.containerImage {
    display: flex;
    position: absolute;
    top: 4rem;
    width: 100%;
}
.image {
    margin: auto;
    width: 95%;
}
.Formulaire {
    display: flex;
    position: relative;
    z-index: 2;
}

@media screen and (max-width: 450px) { 
    .containerImage {
    top: 4rem;

}
    .image {
        display: flex;
        z-index: 0;
    }
}
`;