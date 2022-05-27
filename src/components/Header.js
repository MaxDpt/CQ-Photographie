
    import styled from "styled-components"; 
    import React, {useState, useEffect} from 'react';
    import Image from "./Image";

    export default function Header() {

        const [isLoading, setIsLoading] = useState(true);
        const [logos, setLogo] = useState(null);

        useEffect(() => {
            fetch('http://localhost:1337/api/logos?populate=*',
            {
                method: 'GET',
                headers: {'Accept': 'Application/json'}
            })
        .then(res => res.json())
        .then(res => {
            
            var data = Array.from(res.data);
            setLogo(data);
            setIsLoading(false);
            })
        }, [])

        return (
        <HeaderWrapper>
            
            <div className="left">
                <>
                    {isLoading ? '' : logos.map(logo => (
                    <div className="logo"> <Image {...logo.attributes}/> </div> ) )}
                </>               
            </div>

            <div className="right">
                <>
                    <div className="fb"> <img src=""/> </div>
                    <div className="insta"> <img src=""/> </div>
                    <div className="lang"> <img src=""/> </div>
                </>
            </div>
            
        </HeaderWrapper>
        );
    };

    
    const HeaderWrapper = styled.div`

    background-color: #212838;
    display: flex; 
    justify-content: space-between;
    width: 100%;
    height: 6.5rem;
    
    
    .left {
        
        display: flex; 
        width: 75%;
    }
    .right {
        
        display: flex; 
        justify-content: space-between;
        width: 25%;
    }
    
    .logo img {
        display: flex; 
        border: 2px solid white;
        margin: 0.5rem;
        width: 5rem;
        height: 5rem;
    }
    .fb {
        display: flex; 
        border: 2px solid white;
        margin: 0.5rem;
        width: 5rem;
        height: 5rem;
    }
    .insta {
        display: flex; 
        border: 2px solid white;
        margin: 0.5rem;
        width: 5rem;
        height: 5rem;
    }

.lang {
    display: flex; 
    border: 2px solid white;
    margin: 0.5rem;
    width: 5rem;
    height: 5rem;
}
    `;

