
    import styled from "styled-components"; 
    import React from "react";

    

    const Post = ({
        title = '',
        image = '',
        createdAt = ''
    }) => {
    
        console.log(image.data.attributes.url)
    return (
    <Wrapper>

        <div className="container">
            <div className="row">
              <p className="titre"> {title} </p>
              <p className="createdAt"> {createdAt} </p>
            </div>
          <img className="image" src={'http://localhost:1337'+image.data.attributes.url} />
        </div>


        



    </Wrapper>
    );
    };
    
    const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    .container {
        display: flex;
        width: 50rem; 
        height: 30rem;
        overflow: hidden; 
        flex-direction: column;
    }
    .row {
        font-size: 1.5rem;
        background-color: grey;
        opacity: 50%;
        display: flex; 
        position: relative;
        top: 1.5rem;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }
    .titre {
    margin: auto 1rem;
    }
    .createdAt {
    margin: auto 1rem;
    }
    `;
    export default Post;
