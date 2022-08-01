
    import styled from "styled-components"; 
    import React from "react";

    const Image = ({
        image = '',
    }) => {

    return (
    <Wrapper>
        <div className="container">
          <img className="image" src={'http://localhost:1337'+image.data.attributes.url} />
        </div>
    </Wrapper>
    );
    };
    
const Wrapper = styled.div`

    `;
    export default Image;
