import styled from "styled-components"; 
import React, { useState, useEffect } from "react";
import ImageFullScreen from "./ImageFullScreen";
import BackLogo from "./Icons/BackLogo";
// DONNEES DU POST ---------------------------------------------------------------------
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

// Conversion Date ---------------------------------------------------------------------
    function formatMyDate(value, locale = 'en-GB') {
        return new Date(value).toLocaleDateString(locale);}
    var date = formatMyDate(createdAt);

// Ouverture/Fermeture de l'image ------------------------------------------------------
    const ClickImage = () => {
        setOpenImage(true);
        fetch(urlId,{
            method: 'GET',
            headers: {'Accept': 'Application/json'}})
            .then(res => res.json())
            .then(res => {      
            var data = Array(res.data);
            setPosts(data);
            setIsLoading(false) })}

    const ClickBack = () => {
        setOpenImage(false);}
// ------------------------------------------------------------------------------------
// RENDU ----------------------------------------------------------------------
return (
<Wrapper>
    <div className="container" onClick={ClickImage}>
        <div className="row">
        <p className="titre"> {title} </p>
        <p className="createdAt">publié le {date} </p>
        </div>
        <img className="image" src={'http://localhost:1337'+image.data.attributes.url} />
    </div>
    {openImage === true ? (
    <>
        <div className="Back">
            <a className="BackIcon" onClick={ClickBack}> <BackLogo/> </a>
        </div>
        {isLoading ? '' : posts.map(post => (
            <div className="openImage">
                <ImageFullScreen {...post.attributes} {...post}/>
            </div>
        ) )}
    </>
    ) : null}
</Wrapper> );
};
// STYLE CSS -----------------------------------------------------------------
const Wrapper = styled.div`
display: flex;
justify-content: center;
.container {
    margin: 1rem;
    display: flex;
    width: 24rem; 
    height: 18rem;
    overflow: hidden; 
    flex-direction: column;
    cursor: pointer;
    box-shadow: 0px 2px 12px 2px #02111f;
    transition: 0.5s;}
.container:hover {
    box-shadow: 0px 2px 4px 2px #02111f;}
.container .image {
    width: 28rem; 
    height: auto;
    display: flex; 
    top: -2.5rem;
    position: relative;}
.row {
    display: flex;
    width: 100%;
    font-size: 0.8rem;
    background-color: rgba(0,0,0,0.4); 
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    z-index: 1;}
.titre {
    padding: 0.5rem 0;
    margin: auto 1rem;
    font-family: 'Cormorant SC', serif;
    font-size: 1.1rem;}
.createdAt {
    font-family: 'Cormorant SC', serif;
    margin: auto 1rem;
    font-size: 1.1rem;}
.container img {
    transition: all .6s ease-in-out;}
.container img:hover {
    transform: scale(1.05);
    transition: all .6s ease-in-out;}
.Back {
    display: flex; 
    position: fixed; 
    left: 5rem;
    top: 10rem;
    z-index: 4;
    cursor: pointer;}
.openImage {
    z-index: 3;}
// MOBILE FORMAT ----------------------------------- FORMAT MOBILE \\
@media screen and (max-width: 450px) { 
    @media screen and (max-height: 850px) {
.container {
    margin: 0.3rem;
    width: 6.5rem; 
    height: 6.5rem;}
.container .image {
    width: 14rem; 
    top: -3.5rem;
    left: -4.5rem;}
.row {
    visibility: hidden;}
.Back {
    left: 1rem;
    top: 10%;} }}
// MOBILE FORMAT HORIZONTAL ----------------------- HORIZONTAL FORMAT MOBILE \\
@media screen and (max-width: 850px) {
    @media screen and (max-height: 450px) {
.container {
    margin: 0.3rem;
    width: 10rem; 
    height: 10rem;}
.container .image {
    width: 18rem;  
    top: -3.5rem;
    left: -4.5rem;}
.row {
    visibility: hidden;}
.Back {
    left: 1rem;
    top: 10%;} }}
// TABLETTE FORMAT HORIZONTAL ----------------------- HORIZONTAL FORMAT TABLETTE \\
@media screen and (max-width: 1450px) {
    @media screen and (min-width: 850px) {
    @media screen and (max-height: 950px) {
.container {
    margin: 0.3rem;
    width: 16rem; 
    height: 16rem;}  
.container .image {
    width: 28rem; 
    top: -3.5rem;
    left: -4.5rem;}     
    }}}
// TABLETTE FORMAT ----------------------- FORMAT TABLETTE \\
@media screen and (max-width: 950px) {
    @media screen and (min-height: 850px) {
    @media screen and (max-height: 1450px) {
.container {
    margin: 0.3rem;
    width: 16rem; 
    height: 16rem;}  
.container .image {
    width: 28rem;  
    top: -3.5rem;
    left: -4.5rem;}     
    }}}       
`;
export default Post;
