
    import styled from "styled-components"; 
    import React, { useState, useEffect } from "react";
    import ImageFullScreen from "./ImageFullScreen";
    import BackLogo from "./Icons/BackLogo";
    const Post = ({
        id = '', 
        title = '',
        image = '',
        createdAt = ''
    }) => {
        const [isLoading, setIsLoading] = useState(true);
        const [posts, setPosts] = useState(null);
        const [openImage, setOpenImage] = useState (false);

        var idNumber = String(id);
        var urlId = 'http://localhost:1337/api/posts/'+ idNumber +'?populate=*'

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
                console.log(data);
                setPosts(data);
                setIsLoading(false)
            }, 500)
            })
        }, [])

        const ClickImage = () => {
            setOpenImage(true);
        }
        const ClickBack = () => {
            setOpenImage(false);
        }


        console.log(urlId)
        
        


    return (
    <Wrapper>

        <div className="container" onClick={ClickImage}>
        <div className="row">
          <p className="titre"> {title} </p>
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
