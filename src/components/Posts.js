import styled from "styled-components"; 
import * as React from 'react';
import { useEffect, useState }from "react";
import Post from "./Post";
export default function Posts() {

    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState(null);
    const [categorie, setCategorie] = useState('');
    const [categories, setCategories] = useState(null);
    

// Appel à la liste des posts -----------------------------------------
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
        }, 500)
        })
    }, [])
// -------------------------------------------------------------------------
// Appel à la liste des categories -----------------------------------------
useEffect(() => {
    fetch('http://localhost:1337/api/categories?populate=*',
    {
        method: 'GET',
        headers: {'Accept': 'Application/json'}
    })
.then(res => res.json())
.then(res => {
    setTimeout(() => {
        var data = Array.from(res.data);
        setCategories(data);
        setIsLoading(false)
    }, 500)
    })
}, [])
// -------------------------------------------------------------------------

const handleOnChangeCategorie = (e) => {
    try { setCategorie(e.target.value) } 
    catch { console.log("error") }};

    return (
    <Wrapper>
        <div className="menuList">
        <label for="select">filtre : </label>
        <select id="select" value={categorie} onChange={handleOnChangeCategorie}>
        <option value="">--catégories--</option>
        {isLoading ? 'Loading...' : categories.map(categorie => (
            <option value={categorie.attributes.name}>{categorie.attributes.name}</option>
            ) )}

        </select>
        </div>

        <div className="container1">
            {isLoading ? 'Loading...' : posts.map(post => (
            <div className="post">
                {post.attributes.section === categorie ? (<Post {...post.attributes} {...post}/>) : null }
                {categorie === '' ? (<Post {...post.attributes} {...post}/>) : null }
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