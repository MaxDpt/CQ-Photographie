
    import styled from "styled-components"; 
    import React from "react";

    

    const ImageFullScreen = ({
        image = '',
    }) => {


    return (
    <Wrapper>
        <div className="openImage">
          <img className="image" src={'http://localhost:1337'+image.data.attributes.url} />
        </div>
    </Wrapper>
    );
    };
    
    const Wrapper = styled.div`
    background-color: rgba(0,0,0,0.75);
    display: flex; 
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    .openImage {
        display: flex; 
        position: fixed; 
        width: 80%;
        max-height: 90%;
        right: 10rem;
        bottom: 2rem;
        z-index: 3;
    }
    .openImage img {
        width: 100%;
    }
    @media screen and (max-width: 450px) {
        .openImage {
        width: 100%;
        right: 0rem;
        bottom: 9.5rem;
        z-index: 3;
    }
    .openImage img {
        width: 100%;
        z-index: 3;
    }
     }
    `;
    export default ImageFullScreen;
