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
    const mobileSizePx = 450;
    var pagePrev = pageSelect - 1;
    var pageNext = pageSelect + 1;
// --------------------------------------------------------------------
// CALCUL TAILLE ECRAN & NOMBRE DE POST PAR PAGE ----------------------
const [width,setWidth] = useState(); 
const [height,setHeight] = useState(); 
const [pageSize, SetPageSize] = useState(12);
useEffect(() => {
    var CurrentWidth = (window.screen.width);
    var CurrentHeight = (window.screen.height);
    setWidth(CurrentWidth);
    setHeight(CurrentHeight);
    if (CurrentWidth >= mobileSizePx & CurrentHeight >= mobileSizePx ) {
        SetPageSize(12)
    } else if (CurrentWidth >= mobileSizePx & CurrentHeight >= mobileSizePx) {
        SetPageSize(21)
    } else {
        SetPageSize(24) }
}, [width, height])
// --------------------------------------------------------------------
// Appel à la liste des posts -----------------------------------------
    useEffect(() => {
        fetch('http://localhost:1337/api/posts?populate=*&pagination[page]='+pageSelect+'&pagination[pageSize]='+pageSize+'&sort=id%3Adesc',
        { method: 'GET',
          headers: {'Accept': 'Application/json'}, 
          sort: {id: 'desc'}})
    .then(res => res.json())
    .then(res => {
        setTimeout(() => {
            var data = Array.from(res.data);
            var pageCount = Number(res.meta.pagination.pageCount);
            setPosts(data);
            setPageCount(pageCount);
            setIsLoading(false)
        }, 500) }) }, [pageSelect, pageSize ]) 
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
            var pageCount = Number(res.meta.pagination.pageCount);
            setPosts(data);
            setPageCount(pageCount);
            setIsLoading(false);
            setPageSelect(1); }) } 
    else {
        fetch('http://localhost:1337/api/posts?populate=*&pagination[page]='+pageSelect+'&pagination[pageSize]='+pageSize+'&sort=id%3Adesc',
        { method: 'GET',
          headers: {'Accept': 'Application/json'} })
        .then(res => res.json())
        .then(res => {
            var data = Array.from(res.data);
            var pageCount = Number(res.meta.pagination.pageCount);
            setPosts(data);
            setPageCount(pageCount);
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
        fetch('http://localhost:1337/api/posts?populate=*&pagination[page]='+pageSelect+'&pagination[pageSize]='+pageSize+'&sort=id%3Adesc',
        { method: 'GET',
          headers: {'Accept': 'Application/json'} })
    .then(res => res.json())
    .then(res => {
        setTimeout(() => {
            var data = Array.from(res.data);
            var pageCount = Number(res.meta.pagination.pageCount);
            setPosts(data);
            setPageCount(pageCount);
            setIsLoading(false)
        }, 100) }) }
// ---------------------------------------------------------------------------
//Button Page Precedente------------------------------------------------------
    const prevPage = () => {
        pageSelect --
        setPageSelect(pageSelect)
        fetch('http://localhost:1337/api/posts?populate=*&pagination[page]='+pageSelect+'&pagination[pageSize]='+pageSize+'&sort=id%3Adesc',
        { method: 'GET',
          headers: {'Accept': 'Application/json'}
        })
    .then(res => res.json())
    .then(res => {
        setTimeout(() => {
            var data = Array.from(res.data);
            var pageCount = Number(res.meta.pagination.pageCount);
            setPosts(data);
            setPageCount(pageCount);
            setIsLoading(false)
        }, 100) }) }
 // ------------------------------------------------------------------------    
 // RENDU ------------------------------------------------------------------
    return (
    <Wrapper>
        <div className="containerNav">
            <div className="navPages">
                <div className="pageCount">

                    <a className={`prevPage ${ pageSelect === 1 ? 'prevPageHide' : 'prevPageShow'}`} href="#" onClick={prevPage}>  <p> precedent </p> </a>

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

                    <a className={`nextPage ${pageSelect === pageCount ? 'nextPageHide' : 'nextPageShow'}`} href="#" onClick={nextPage}> <p> suivant </p> </a>

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


                <div className="NavPageBottom">
                <a className={`prevPage ${ pageSelect === 1 ? 'prevPageHide' : 'prevPageShow'}`} href="#" onClick={prevPage}>  <p> precedent </p> </a>
                <p className="separation"> | </p>
                <a className={`nextPage ${pageSelect === pageCount ? 'nextPageHide' : 'nextPageShow'}`} href="#" onClick={nextPage}> <p> suivant </p> </a>
                </div>


    </Wrapper> );
};
// STYLE CSS ---------------------------------------------------------------------
const Wrapper = styled.div`
// GRILLE D'IMAGES --------------------------------------------------
.containerGrille {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%; }
// BLOC NAVIGATION ---------------------------------------------------
.containerNav {
    display: flex; 
    justify-content: end;
    flex-direction: row;
    width: 80%;
    margin: auto; }
// NAVIGATION DES PAGES -----------------------------------------------
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
    font-size: 0.9rem; }
.pageCurrent {
    color: gray; }
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
// NAVIGATION DES CATEGORIES --------------------------------------------
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
    font-family: 'Nunito', sans-serif;
    margin: auto;
    font-size: 1.2rem; }
// NAVIGATION PAGES BAS ------------------------------------------------
.NavPageBottom {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;}
.NavPageBottom a, .NavPageBottom p {
    margin: 0.5rem 1rem;}
.NavPageBottom .separation {
    margin-top: 1rem;} 
// MOBILE FORMAT ----------------------------------- FORMAT MOBILE \\
@media screen and (max-width: 450px) {
    @media screen and (max-height: 850px) {
.containerGrille {
margin-top: 1rem; }
.containerNav {
    margin: 0;
    margin-top: -3rem;
    flex-direction: column;
    width: 100%;}
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
    width: 80%;}
.menuList select {
    border-radius: 10px;
    width: 80%;
    margin: auto 0rem;
    font-size: 0.9rem; }
.menuList label {
    margin: auto;
    font-size: 0.9rem; }
.nextPage:hover {
    color: white; }
.prevPage:hover {
    color: white; }}}
// MOBILE FORMAT HORIZONTAL ----------------------- HORIZONTAL FORMAT MOBILE \\   
@media screen and (max-width: 850px) {
    @media screen and (max-height: 450px) {
.containerGrille {
margin-top: 1rem; }
.containerNav {
    margin: 0;
    margin-top: -3rem;
    flex-direction: column;
    width: 100%;}
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
    width: 40%;}
.menuList select {
    border-radius: 10px;
    width: 80%;
    margin: auto 0rem;
    font-size: 0.9rem; }
.menuList label {
    margin: auto;
    font-size: 0.9rem; }
.nextPage:hover {
    color: white; }
.prevPage:hover {
    color: white; }
.NavPageBottom {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;}
.NavPageBottom a, .NavPageBottom p {
    margin: 0.5rem 1rem;}
.NavPageBottom .separation {
    margin-top: 1rem;} }}
// TABLETTE FORMAT HORIZONTAL ----------------------- HORIZONTAL FORMAT TABLETTE \\
@media screen and (max-width: 1450px) {
    @media screen and (min-width: 850px) {
    @media screen and (max-height: 950px) {
.containerGrille {
    margin-top: 1rem; }
.containerNav {
    justify-content: center;   
    width: auto; } 
.pageCount {
    margin-top: 0.5rem;
    font-size: 0.9rem;} 
.menuList label {
    margin: auto;
    font-size: 1rem; } 
.menuList select {
    width: 75%;
    font-size: 1rem; }    
    }}}
// TABLETTE FORMAT ----------------------- FORMAT TABLETTE \\
@media screen and (max-width: 950px) {
    @media screen and (min-height: 850px) {
    @media screen and (max-height: 1450px) {
.containerGrille {
    margin-top: 1rem; }
.containerNav {
    margin: 0.5rem auto;
    flex-direction: column;
    width: 60%;}
.navPages {
    flex-direction: column;
    width: auto;
    padding-right: 0;
    padding-top: 0.5rem;
    padding-bottom: 1rem;
    z-index: 2; }
.pageCount {
    width: 100%;
    font-size: 1.2rem; }
.menuList label {
    margin: auto;
    font-size: 1.2rem; } 
.menuList select {
    width: 75%;
    font-size: 1.2rem; } 
.NavPageBottom a, .NavPageBottom p {
    font-size: 1.2rem;}   
    }}  }
     
`;