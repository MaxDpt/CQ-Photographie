
    import styled from "styled-components"; 
    import React, {useState, useEffect} from 'react';
    import Image from "./Image";
    import FbLogo from "./Icons/FacebookLogo";
    import InstaLogo from "./Icons/InstagramLogo";

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

                    <h1>Charle Quentin Photographie</h1>
                </>               
            </div>

            <div className="right">
                <>
                <div className="links">
                    <div className="fb"> <div className="box"><FbLogo/> <a href="#">CharleQuentin</a></div>  </div>
                    <div className="insta"> <div className="box"><InstaLogo/> <a href="#">@CharleQuentin</a></div> </div>
                </div>

                <div className="lang"> <img src=""/> </div>
                </>
            </div>
            
        </HeaderWrapper>
        );
    };

    
    const HeaderWrapper = styled.div`

    background: rgb(71,85,94);
    background: linear-gradient(90deg, rgba(71,85,94,1) 0%, rgba(2,17,31,1) 25%, rgba(2,17,31,1) 75%, rgba(71,85,94,1) 100%);
    box-shadow: 0px 2px 10px 2px #02111f;
    display: flex; 
    justify-content: space-between;
    width: 100%;
    height: 6.5rem;
    
    
    .left {
        
        display: flex; 
        width: 75%;
    }

    .left h1 {
        margin: auto 4rem;
        font-size: 2.4rem;
        letter-spacing: 2px;
    }
    .right {
        
        display: flex; 
        justify-content: space-between;
        width: 25%;
    }

    .links {
        display: flex;
        justify-content: space-between;
        width: 50%;
        flex-direction: row;
    }
    .box {
        display: flex; 
        flex-direction: column;
        justify-content: center;
    }
    .box a {
        color: white;
        text-decoration: none;
    }
    
    .logo img {
        display: flex; 
        border: 2px solid white;
        margin: 0.5rem;
        width: 6rem;
        border-radius: 10px;
        height: 5rem;
    }
    .fb {
        display: flex; 
        justify-content: center;
        margin: 0.5rem;
        width: 5rem;
        height: 5rem;
    }
    .insta {
        display: flex; 
        justify-content: center;
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

