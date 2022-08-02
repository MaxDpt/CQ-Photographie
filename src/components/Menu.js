
import styled from "styled-components"; 
import * as React from 'react';
import { Link } from "react-router-dom";

export default function Menu() {
// URL DES PAGES ---------------------------------------------------------
var urlcourante = document.location.href;
var urlAccueil = 'http://localhost:3000/';
var urlGalerie = 'http://localhost:3000/Galerie';
var urlPrestations = 'http://localhost:3000/Prestations';
var urlContact = 'http://localhost:3000/Contact';

// RENDU -----------------------------------------------------------------
return (
<Wrapper>
    <div className="containerLink">
    <Link className={`link ${urlcourante === urlAccueil ? "show-link" : "hide-link"} `} to ="/"> <h1>Accueil</h1> </Link>
    <Link className={`link ${urlcourante === urlGalerie ? "show-link" : "hide-link"} `} to ="/Galerie"> <h1>Galerie</h1>  </Link>
    <Link className={`link ${urlcourante === urlPrestations ? "show-link" : "hide-link"} `} to ="/Prestations"> <h1>Prestations</h1> </Link>
    <Link className={`link ${urlcourante === urlContact ? "show-link" : "hide-link"} `} to ="/Contact"> <h1>Contact</h1>  </Link>
    </div>
</Wrapper> );
};
// STYLE CSS -------------------------------------------------------------    
const Wrapper = styled.div`
display: flex; 
justify-content: center;
width: auto;
height: 6rem;
z-index: 2;
.containerLink {
    background-color: #02111f;
    box-shadow: 0px 2px 10px 2px #02111f;
    padding: 0 1rem;
    height: 4rem;
    margin: auto;
    display: flex; 
    flex-direction: row; 
    border-radius: 8px;}
.link {
    color: white;
    font-size: 32px;
    letter-spacing: 1px;
    margin: auto 2rem;
    text-decoration: none;}
.show-link {
    color: gray;}
// MOBILE FORMAT ----------------------------------- FORMAT MOBILE \\
@media screen and (max-width: 450px) { 
    @media screen and (max-height: 850px) {
width: 100%;
.containerLink {  
    width: 100%;
    height: 3rem;
    margin-top: 0;
    border-radius: 0px;}
.link {
    font-size: 14px;
    margin: auto 0.5rem;} }}
// MOBILE FORMAT HORIZONTAL ----------------------- HORIZONTAL FORMAT MOBILE \\
@media screen and (max-width: 850px) {
    @media screen and (max-height: 450px) {
width: 100%;
.containerLink {
    justify-content: center;
    width: 100%;
    height: 3rem;
    margin-top: 0;
    border-radius: 0px;}
.link {
    font-size: 18px;
    margin: auto 0.5rem;} }}
// TABLETTE FORMAT HORIZONTAL ----------------------- HORIZONTAL FORMAT TABLETTE \\
@media screen and (max-width: 1450px) {
    @media screen and (min-width: 850px) {
    @media screen and (max-height: 950px) {
.link {
    font-size: 26px;;} }}}
// TABLETTE FORMAT ----------------------- FORMAT TABLETTE \\
@media screen and (max-width: 950px) {
    @media screen and (min-height: 850px) {
    @media screen and (max-height: 1450px) {
width: auto;
margin: auto;
.containerLink { 
    padding: 0.5rem 1.5rem;
    justify-content: center; 
    width: 100%;
    height: 3rem;}
.link {
    font-size: 26px;
    margin: auto 1rem;}         
    }}}
`;

