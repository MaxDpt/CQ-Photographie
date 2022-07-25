
    import styled from "styled-components"; 
    import * as React from 'react';
    import { useEffect, useState }from "react";
    import Image from "./Image";

    export default function HomPage() {

        const [isLoading, setIsLoading] = useState(true);
        const [couverture, setCouverture] = useState(null);

// Appel API ---------------------------------------------------------------
        useEffect(() => {
            fetch('http://localhost:1337/api/couvertures?populate=*',
            {
                method: 'GET',
                headers: {'Accept': 'Application/json'}
            })
        .then(res => res.json())
        .then(res => {
            
            var data = Array.from(res.data);
            setCouverture(data);
            setIsLoading(false)
            
            })
        }, [])
// -------------------------------------------------------------------------
        return (
        <Wrapper>
        <div>
        {isLoading ? '' : couverture.map(image => (
            <>
                <Image {...image.attributes}/>
            </>
            ) )}
        </div>

        </Wrapper>
        );
    };
    
    const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    `;

