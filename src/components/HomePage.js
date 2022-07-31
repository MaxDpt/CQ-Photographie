
    import styled from "styled-components"; 
    import * as React from 'react';
    import { useEffect, useState }from "react";
    import Image from "./Image";

    export default function HomPage() {

        const [isLoading, setIsLoading] = useState(true);
        const [couverture, setCouverture] = useState(null);

// Appel API ---------------------------------------------------------------
        useEffect(() => {
            fetch('http://localhost:1337/api/couvertures/1?populate=*',
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
        <div>
        {isLoading ? '' : couverture.map(image => (
            <div className="containerImage">
                <Image {...image.attributes}/>
            </div>
            ) )}
        </div>

        </Wrapper>
        );
    };
    
    const Wrapper = styled.div`

    .containerImage {

    }

    `;

