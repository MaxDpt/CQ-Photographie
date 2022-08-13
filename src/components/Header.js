
    import styled from "styled-components"; 
    import React, {useState, useEffect} from 'react';
    import Image from "./Image";
    import FbLogo from "./Icons/FacebookLogo";
    import InstaLogo from "./Icons/InstagramLogo";

    export default function Header() {

        const [isLoading, setIsLoading] = useState(true);
        const [logos, setLogo] = useState(null);

        const [instaName, setInstaName] = useState();
        const [instaLink, setInstaLink] = useState();
        const [fbName, setFBName] = useState();
        const [fbLink, setFBLink] = useState();
        const mobileSizeWidth = 450;

// CALCUL TAILLE DE L'ECRAN -------------------------------------------------------
    var width = (window.screen.width);
    var height = (window.screen.height);

// APPEL API DU LOGO --------------------------------------------------------------
        useEffect(() => {
            fetch('http://localhost:1337/api/logos/1?populate=*',
            {
                method: 'GET',
                headers: {'Accept': 'Application/json'}
            })
        .then(res => res.json())
        .then(res => {
            var data = Array(res.data);
            setLogo(data);
            setIsLoading(false);
            })
        }, [])
// APPEL API DU LIEN 1 --------------------------------------------------------------
        useEffect(() => {
            fetch('http://localhost:1337/api/socials/1?populate=*',
            {
                method: 'GET',
                headers: {'Accept': 'Application/json'}})
        .then(res => res.json())
        .then(res => {
            var title = Array(res.data.attributes.title);
            var link = Array(res.data.attributes.link);
            setInstaName(title);
            setInstaLink(link);}) }, [])
// APPEL API DU LIEN 2 --------------------------------------------------------------
        useEffect(() => {
            fetch('http://localhost:1337/api/socials/2?populate=*',
            {
                method: 'GET',
                headers: {'Accept': 'Application/json'}})
        .then(res => res.json())
        .then(res => {
            var title = Array(res.data.attributes.title);
            var link = Array(res.data.attributes.link);
            setFBName(title);
            setFBLink(link);}) }, [])
// RENDU ----------------------------------------------------------------------------
console.log(logos)
return (
<HeaderWrapper>
    <div className="left">
        {isLoading ? '...' : logos.map(image => (
         <div className="logo"> <Image {...image.attributes}/> </div> ) )}
        {width > mobileSizeWidth & height >= mobileSizeWidth ?(<h1 >Charle Quentin Photographie</h1>) : null}                
    </div>

    <div className="right">
        <div className="links">
            <div className="fb"> <div className="box"> 
                <a href={fbLink}> <FbLogo/> {width >= mobileSizeWidth & height >= mobileSizeWidth ?(<p>{fbName}</p>) : null} </a></div>  
            </div>
            <div className="insta"> <div className="box">
                <a href={instaLink}> <InstaLogo/> {width >= mobileSizeWidth & height >= mobileSizeWidth ?(<p>{instaName}</p>) : null} </a></div> 
            </div>
        </div>
    </div> 
</HeaderWrapper> ); };
// STYLE CSS -------------------------------------------------------------------------
const HeaderWrapper = styled.div`
// GLOBAL ---------------------------------------------------
background: rgb(71,85,94);
background: linear-gradient(90deg, rgba(71,85,94,1) 0%, rgba(2,17,31,1) 25%, rgba(2,17,31,1) 75%, rgba(71,85,94,1) 100%);
box-shadow: 0px 2px 10px 2px #02111f;
display: flex; 
justify-content: space-between;
width: 100%;
height: 6.5rem;
z-index: 2;
// LOGO & TITRE GAUCHE ---------------------------------------
.left {
    display: flex; 
    width: auto;}
.left h1 {
    margin: auto 4rem;
    font-size: 2.4rem;
    letter-spacing: 2px;}
.logo img {
    display: flex; 
    border: 2px solid white;
    margin: 0.5rem;
    width: 6rem;
    border-radius: 10px;
    height: 5rem;}
// LIEN RESEAUX SOCIAUX DROITE --------------------------------
.right {
    display: flex; 
    justify-content: end;
    width: 25%;}
.links {
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin-right: 3rem;
    flex-direction: row;}
.box {
    display: flex; 
    flex-direction: column;}
.box a {
    margin: auto;
    color: white;
    text-decoration: none;}
.fb {
    display: flex; 
    justify-content: center;
    margin: 0.5rem;
    width: 5rem;
    height: 5rem;}
.insta {
    display: flex; 
    justify-content: center;
    margin: 0.5rem;
    width: 5rem;
    height: 5rem;}
// MOBILE FORMAT ----------------------------------- FORMAT MOBILE \\
@media screen and (max-width: 450px) { 
    @media screen and (max-height: 850px) {
// GLOBAL ------------------------------------------------------
background: #02111f;
height: 4rem;
// LOGO & TITRE GAUCHE ----------------------------------------
.left h1 {
    visibility: hidden;
    font-size: 0rem;}
.left {
    display: flex; 
    width: 40%;}
.logo img {
    border: 1px solid white;
    width: 4rem;
    height: 3rem;}
// LIEN RESEAUX SOCIAUX DROITE --------------------------------     
.right {
    width: 60%;}
.links {
    margin-right: 0.5rem;}
.links p {
    visibility: hidden;}
.fb {
    width: 2rem;
    height: 2rem;}
.insta {
    width: 2rem;
    height: 2rem;}} }
// MOBILE FORMAT HORIZONTAL ----------------------- HORIZONTAL FORMAT MOBILE \\
@media screen and (max-width: 850px) {
    @media screen and (max-height: 450px) {
// GLOBAL ------------------------------------------------------
background: #02111f;
height: 4rem;
// LOGO & TITRE GAUCHE ----------------------------------------
.left h1 {
    font-size: 1.2rem;}
.logo img {
    border: 1px solid white;
    width: 4rem;
    height: 3rem;}
// LIEN RESEAUX SOCIAUX DROITE -------------------------------- 
.right {
    width: 30%;}
.links {
    margin-right: 0.5rem;}
.links p {
    visibility: hidden;}
.fb {
    width: 2rem;
    height: 2rem;}
.insta {
    width: 2rem;
    height: 2rem;}} }
// TABLETTE FORMAT HORIZONTAL ----------------------- HORIZONTAL FORMAT TABLETTE \\
@media screen and (max-width: 1450px) {
@media screen and (min-width: 850px) {
@media screen and (max-height: 950px) {
// LOGO & TITRE GAUCHE ----------------------------------------
.left h1 {
    font-size: 1.5rem;}
.left {
    display: flex; 
    width: 50%;}
// LIEN RESEAUX SOCIAUX DROITE -------------------------------- 
.right {
    width: 50%;}       
    }}}
// TABLETTE FORMAT ----------------------- FORMAT TABLETTE \\
@media screen and (max-width: 950px) {
    @media screen and (min-height: 850px) {
    @media screen and (max-height: 1450px) {
// LOGO & TITRE GAUCHE ----------------------------------------
.left h1 {
    font-size: 1.2rem;}
.left {
    display: flex; 
    width: 40%;}
// LIEN RESEAUX SOCIAUX DROITE -------------------------------- 
.right {
    width: 60%;}       
    }}}
    `;

