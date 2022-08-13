
    import styled from "styled-components"; 
    import React from "react";

    const Image = ({
        image = '',
    }) => {
        const urlAppImage = 'https://strapi-data-app.herokuapp.com';
    return (
    <Wrapper>
        <div className="container">
            <img className="image" alt="" src={urlAppImage+image.data.attributes.url} />
        </div>
    </Wrapper>
    );
    };
    
const Wrapper = styled.div``;
    export default Image;
