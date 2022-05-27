import styled from "styled-components"; 
import * as React from 'react';
import { useEffect, useState }from "react";

import Post from "./Post";
export default function Posts() {

    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        fetch('http://localhost:1337/api/posts?populate=*',
        {
            method: 'GET',
            headers: {'Accept': 'Application/json'}
        })
    .then(res => res.json())
    .then(res => {
        setTimeout(() => {
            var data = Array.from(res.data);
            setPosts(data);
            setIsLoading(false)
        }, 2000)
        })
    }, [])

    return (
    <Wrapper>
        <div className="container1">
      
            {isLoading ? 'Loading...' : posts.map(post => (
            <div className="post">
                <Post {...post.attributes}/>
            </div>
            ) )}

        </div>
    </Wrapper>
    );
};

const Wrapper = styled.div`
.container1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    
}
.post {
    margin: 1rem;
}
`;