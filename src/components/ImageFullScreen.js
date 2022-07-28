
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
        width: 90%;
        height: 90%;
        right: 0;
        bottom: 3rem;
        z-index: 1;
    }
    .openImage img {
        width: 90%;
    }
    `;
    export default ImageFullScreen;
