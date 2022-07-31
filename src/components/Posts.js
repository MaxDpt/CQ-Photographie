import styled from "styled-components"; 
import * as React from 'react';
import { useEffect, useState }from "react";
import Post from "./Post";
export default function Posts() {

// Données ------------------------------------------------------------
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);
    const [posts, setPosts] = useState(null);
    const [categorie, setCategorie] = useState('');
    const [categories, setCategories] = useState(null);
    var [pageSelect, setPageSelect] = useState(1);
    const [pageCount, setPageCount] = useState(null);
    const [pageCurrent, setPageCurrent] = useState(null);
    var pagePrev = pageSelect - 1;
    var pageNext = pageSelect + 1;
// --------------------------------------------------------------------

// Appel à la liste des posts -----------------------------------------
    useEffect(() => {
        fetch('http://localhost:1337/api/posts?populate=*&pagination[page]='+pageSelect+'&pagination[pageSize]=12&sort=id%3Adesc',
        { method: 'GET',
          headers: {'Accept': 'Application/json'}, 
          sort: {id: 'desc'}})
    .then(res => res.json())
    .then(res => {
        setTimeout(() => {
            var data = Array.from(res.data);
            var pageCurrent = Number(res.meta.pagination.page);
            var pageCount = Number(res.meta.pagination.pageCount);
            setPosts(data);
            setPageCount(pageCount);
            setPageCurrent(pageCurrent);
            setIsLoading(false)
        }, 500) }) }, []) 
// ---------------------------------------------------------------------  

// Categorie page ------------------------------------------------------      
    const categorieClicked = () => {
    if (categorie !== '') {
            fetch('http://localhost:1337/api/posts?populate=*&pagination[pageSize]=100&sort=id%3Adesc', 
            { method: 'GET',
              headers: {'Accept': 'Application/json'} })
        .then(res => res.json())
        .then(res => {
            var data = Array.from(res.data);
            var pageCurrent = Number(res.meta.pagination.page);
            var pageCount = Number(res.meta.pagination.pageCount);
            setPosts(data);
            setPageCount(pageCount);
            setPageCurrent(pageCurrent);
            setIsLoading(false);
            setPageSelect(1); }) } 
    else {
        fetch('http://localhost:1337/api/posts?populate=*&pagination[page]='+pageSelect+'&pagination[pageSize]=12&sort=id%3Adesc',
        { method: 'GET',
          headers: {'Accept': 'Application/json'} })
        .then(res => res.json())
        .then(res => {
            var data = Array.from(res.data);
            var pageCurrent = Number(res.meta.pagination.page);
            var pageCount = Number(res.meta.pagination.pageCount);
            setPosts(data);
            setPageCount(pageCount);
            setPageCurrent(pageCurrent);
            setIsLoading(false) }) }}; 
// -------------------------------------------------------------------------
    
// Appel à la liste des categories -----------------------------------------
useEffect(() => {
    fetch('http://localhost:1337/api/categories?populate=*',
    { method: 'GET',
      headers: {'Accept': 'Application/json'} })
.then(res => res.json())
.then(res => {
    setTimeout(() => {
        var data = Array.from(res.data);
        setCategories(data);
        setIsLoading2(false)
    }, 500) }) }, [])
// -------------------------------------------------------------------------

// Lecture categorie -------------------------------------------------------
const handleOnChangeCategorie = (e) => {
    try { setCategorie(e.target.value) } 
    catch { console.log("error") }};
// -------------------------------------------------------------------------

//Button Page Suivante------------------------------------------------------
    const nextPage = () => {
        pageSelect ++
        setPageSelect(pageSelect)  
        fetch('http://localhost:1337/api/posts?populate=*&pagination[page]='+pageSelect+'&pagination[pageSize]=12&sort=id%3Adesc',
        { method: 'GET',
          headers: {'Accept': 'Application/json'} })
    .then(res => res.json())
    .then(res => {
        setTimeout(() => {
            var data = Array.from(res.data);
            var pageCurrent = Number(res.meta.pagination.page);
            var pageCount = Number(res.meta.pagination.pageCount);
            setPosts(data);
            setPageCount(pageCount);
            setPageCurrent(pageCurrent);
            setIsLoading(false)
        }, 100) }) }
// ---------------------------------------------------------------------------

//Button Page Precedente------------------------------------------------------
    const prevPage = () => {
        pageSelect --
        setPageSelect(pageSelect)
        fetch('http://localhost:1337/api/posts?populate=*&pagination[page]='+pageSelect+'&pagination[pageSize]=12&sort=id%3Adesc',
        { method: 'GET',
          headers: {'Accept': 'Application/json'}
        })
    .then(res => res.json())
    .then(res => {
        setTimeout(() => {
            var data = Array.from(res.data);
            var pageCurrent = Number(res.meta.pagination.page);
            var pageCount = Number(res.meta.pagination.pageCount);
            setPosts(data);
            setPageCount(pageCount);
            setPageCurrent(pageCurrent);
            setIsLoading(false)
        }, 100) }) }
 // ------------------------------------------------------------------------    


    return (
    <Wrapper>
        <div className="containerNav">
            <div className="navPages">
                <div className="pageCount">

                    <a className={`prevPage ${ pageSelect === 1 ? 'prevPageHide' : 'prevPageShow'}`} onClick={prevPage}>  <p> precedent </p> </a>

                    <div className="pageCountNumber">
                        {pageCount >= 2 ? ( <>
                        {pageNext === pageCount + 1 ? (<p className="pageNext">{(pagePrev -1)}</p>) : null}
                        {pageNext === pageCount + 1  ? (<p className="pageNext"><p className="bar">-</p></p>) : null}

                        {pagePrev > 0 ? (<p className="pagePrev">{pagePrev}</p>) : null }
                        {pagePrev > 0 ? (<p className="pagePrev"><p className="bar">-</p></p>) : null }
                        </>) : null }

                        <p className='pageCurrent'>{pageSelect}</p>

                        {pageCount >= 2 ? ( <>
                        {pageNext < pageCount + 1  ? (<p className="pageNext"><p className="bar">-</p></p>) : null}
                        {pageNext < pageCount + 1 ? (<p className="pageNext">{pageNext}</p>) : null}

                        {pagePrev < 1  ? (<p className="pageNext"><p className="bar">-</p></p>) : null}
                        {pagePrev < 1 ? (<p className="pageNext">{(pageNext + 1)}</p>) : null}
                        </>) : null }

                        <p>&ensp;. . .&ensp;</p>

                        <p>{pageCount} </p>
                    </div>

                    <a className={`nextPage ${pageSelect === pageCount ? 'nextPageHide' : 'nextPageShow'}`} onClick={nextPage}> <p> suivant </p> </a>

                </div>

                <div className="menuList">
                    <label for="select">filtre : </label>
                    <select id="select" value={categorie} onChange={handleOnChangeCategorie} onClick={categorieClicked}>
                    <option value="">--catégories--</option>
                    {isLoading2 ? 'Loading...' : categories.map(categorie => (
                    <option value={categorie.attributes.name}>{categorie.attributes.name}</option> ) )}
                    </select>
                </div>
            </div>
        </div>


        <div className="containerGrille">
            {isLoading ? 'Loading...' : posts.map(post => (
            <div className="post">
                {post.attributes.section === categorie ? (<Post {...post.attributes} {...post}/>) : null }
                {categorie === '' ? (<Post {...post.attributes} {...post}/>) : null }
            </div> ) )}
        </div>
    </Wrapper>
    );
};

const Wrapper = styled.div`
.containerGrille {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%; }

.pageCurrent {
    color: gray; }

.containerNav {
    display: flex; 
    justify-content: end;
    flex-direction: row;
    width: 80%;
    margin: auto; }

.navPages {
    background-color: #02111f;
    box-shadow: 0px 2px 10px 2px #02111f;
    border-radius: 10px;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    display: flex; 
    justify-content: end;
    flex-direction: row;
    width: 45%; }
.pageCount {
    display: flex; 
    font-size: 1.1rem;
    flex-direction: row;
    justify-content: center;
    margin-top: 0.2rem;
    width: 50%;
    height: 1.6rem; }

.pageCount p {
    margin: 0 0.6rem; }
.bar {
    padding-top: 0.4rem;
    font-size: 0.9rem;
}
.pageCountNumber {
    display: flex; 
    flex-direction: row;}

.pageCountNumber p {
    margin: 0 0.15rem;}

.nextPage {
    cursor: pointer; }
.nextPage:hover {
    color: gray; }

.nextPageHide {
    pointer-events: none;
    color: gray; }

.prevPage {
    cursor: pointer; }
.prevPage:hover {
    color: gray; }

.prevPageHide {
    pointer-events: none;
    color: gray; }

.menuList {
    display: flex;
    justify-content: end;
    width: 50%;
    margin: auto; }

.menuList select {
    border-radius: 10px;
    width: 85%;
    margin: auto 0;
    font-size: 1.2rem; }

.menuList label {
    font-size: 1.2rem; }

@media screen and (max-width: 450px) {
.containerGrille {
margin-top: 1rem; }

.containerNav {
    margin: 0;
    margin-top: -3rem;
    flex-direction: column;
    width: 100%;
 }

.navPages {
    flex-direction: column;
    border-radius: 0px;
    width: 100%;
    padding-right: 0;
    padding-top: 0;
    padding-bottom: 1rem;
    z-index: 2; }
.pageCount {
    width: 100%;
    font-size: 0.9rem; }

.menuList {
    width: 80%;
}

.menuList select {
    border-radius: 10px;
    width: 80%;
    margin: auto 0rem;
    font-size: 0.9rem; }

.menuList label {
    margin: auto;
    font-size: 0.9rem; }
}`;