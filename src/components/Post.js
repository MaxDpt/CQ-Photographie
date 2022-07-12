
    import styled from "styled-components"; 
    import React, { useState, useEffect } from "react";
    import ImageFullScreen from "./ImageFullScreen";
    import BackLogo from "./Icons/BackLogo";
    
    const Post = ({
        id = '', 
        title = '',
        image = '',
        createdAt = '',
    }) => {

        const [isLoading, setIsLoading] = useState(true);
        const [posts, setPosts] = useState(null);
        const [openImage, setOpenImage] = useState (false);

// Conversion URL du post selectionné --------------------------------------------------
        var idNumber = String(id);
        var urlId = 'http://localhost:1337/api/posts/'+ idNumber +'?populate=*'
// -------------------------------------------------------------------------------------
// Appel du post selectionné -----------------------------------------------------------
        useEffect(() => {
            fetch(urlId,
            {
                method: 'GET',
                headers: {'Accept': 'Application/json'}
            })
        .then(res => res.json())
        .then(res => {
            setTimeout(() => {
                var data = Array(res.data);
                setPosts(data);
                setIsLoading(false)
            }, 500)
            })
        }, [])
// ------------------------------------------------------------------------------------
// Ouverture/Fermeture de l'image -----------------------------------------------------
        const ClickImage = () => {
            setOpenImage(true);
        }
        const ClickBack = () => {
            setOpenImage(false);
        }
// ------------------------------------------------------------------------------------
    return (
    <Wrapper>

        <div className="container" onClick={ClickImage}>
          <div className="row">
            <p className="titre"> {title} </p>
            <p className="titre"> {} </p>
            <p className="createdAt"> {createdAt} </p>
          </div>
            <img className="image" src={'http://localhost:1337'+image.data.attributes.url} />
        </div>
       
    {openImage === true ? (
        <>
        <div className="Back">
            <a className="BackIcon" onClick={ClickBack}> <BackLogo/> </a>
        </div>

        {isLoading ? 'Loading...' : posts.map(post => (
            <div className="openImage">
                <ImageFullScreen {...post.attributes} {...post}/>
            </div>
        ) )}
        </>
    ) : null}
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
        cursor: pointer;
    }

    .row {
        display: flex;
        width: 100%;
        font-size: 1.1rem;
        background-color: rgba(0,0,0,0.6); 
        position: relative;
        top: 1.1rem;
        flex-direction: row;
        justify-content: space-between;
    }
    .titre {
    margin: auto 1rem;
    }
    .createdAt {
    margin: auto 1rem;
    }
    .container img {
        transition: all .6s ease-in-out;
    }
    .container img:hover {
        transform: scale(1.05);
        transition: all .6s ease-in-out;
    }
    .Back {
        display: flex; 
        position: fixed; 
        left: 5rem;
        top: 10rem;
        z-index: 2;
        cursor: pointer;
    }

    .openImage {
        z-index: 1;
    }


    `;
    export default Post;
