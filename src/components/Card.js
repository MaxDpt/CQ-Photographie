
import styled from "styled-components"; 
import React from "react";
import { Link } from "react-router-dom";

// DONNEES DE LA PRESTATION ----------------------------------------
const Card = ({
    id = '',
    title = '',
    description = '',
    prix = '',
    image ='',
}) => {

// CLICK SUR LA PRESTATION ------------------------------------------ 
const PrestationClicked = () => {
    localStorage.setItem('idPrestation', id) }
// ------------------------------------------------------------------
// RENDU ------------------------------------------------------------
return (
<Wrapper>
    <div className="container" onClick={PrestationClicked}>
    <Link className='link' to ="/Contact"> 
        <div className="card">
            <div className="row1"><h2 className="titre">{title}</h2></div>
            <div className="row2"><p className="description">{description}</p></div>
            <div className="row3"><p className="prix">{prix} euro</p></div>
            <div className="row4"> <p>Choisir</p></div>
        </div>
    </Link>
        <div className="image">
            <img className="image" alt="" src={image.data.attributes.url}/>
        </div>
    </div>
</Wrapper>
);};
// STYLE CSS ---------------------------------------------------------
const Wrapper = styled.div`
.container {
    box-shadow: 0px 2px 12px 2px #02111f;
    border-radius: 2px;
    display: flex;
    width: 20rem; 
    height: 30rem;
    overflow: hidden; 
    flex-direction: column; }
.container:hover {
    cursor: pointer;
    box-shadow: 0px 2px 4px 2px #02111f;}
.link {
    display: flex;
    width: 20rem;
    height: 30rem;
}
.card { 
    z-index: 1;}
.row1, .row2, .row3, .row4 {
    display: flex;  
    justify-content: center;}
.row1 {
    width: 17rem;
    position: relative;
    margin-top: -1rem;
    height: 4rem;
    font-size: 4rem;
    text-align: center;}
.row2 {
    width: 17rem;
    height: 16rem;
    font-size: 1.6rem;
    text-align: center;}
.row3 {
    width: 17rem;
    height: 4rem;
    font-size: 2.2rem;}
.row4 {
    background-color: rgba(0,0,0,0.4);
    margin-top: 2rem;
    padding-top: 0.5rem;
    margin-left: -1.5rem;
    width: 21rem;
    height: 4rem;
    font-size: 2.2rem;}
.description {
    margin-top: 6rem;
    height: 20rem;}
.prix {
    margin-top: 2.5rem;
    margin-bottom: 1rem;}
.image {
    opacity: 65%;
    width: 70rem;
    position: relative;
    top: -22rem;
    left: -8rem;}
// MOBILE FORMAT ----------------------------------- FORMAT MOBILE \\
@media screen and (max-width: 450px) { 
.container {
    width: 10rem; 
    height: 18rem;}
.row1 {
    width: 9rem;
    margin-top: 0rem;
    height: 2rem;
    font-size: 1.6rem;}
.row2 {
    display: flex;
    justify-content: center;
    width: 9rem;
    height: 2rem;
    font-size: 0.9rem;}
.row3 {
    width: 9rem;
    height: 1rem;
    font-size: 1.2rem;}
.row4 {
    margin-top: 10rem;
    width: 12rem;
    height: 2rem;
    font-size: 1.2rem;}
.description {
    margin-top: 2rem;
    height: 10rem;}
.prix {
    margin-top: 9.5rem;
    margin-bottom: 1rem;}
.image {
    width: 30rem;
    top: -9.5rem;
    left: -4.5rem;}}
// MOBILE FORMAT HORIZONTAL ----------------------- HORIZONTAL FORMAT MOBILE \\
@media screen and (max-width: 850px) {
    @media screen and (max-height: 450px) { 
.container {
    width: 12rem; 
    height: 18rem;}
.row1 {
    width: 11rem;
    margin-top: 0rem;
    height: 2rem;
    font-size: 1.6rem;}
.row2 {
    width: 11rem;
    height: 2rem;
    font-size: 0.9rem;}
.row3 {
    width: 11rem;
    height: 1rem;
    font-size: 1.2rem;}
.row4 {
    margin-top: 10rem;
    width: 14rem;
    height: 2rem;
    font-size: 1.2rem;}
.description {
    margin-top: 2rem;
    height: 10rem;}
.prix {
    margin-top: 9.5rem;
    margin-bottom: 1rem;}
.image {
    width: 30rem;
    top: -9.5rem;
    left: -4.5rem;}}}
// TABLETTE FORMAT HORIZONTAL ----------------------- HORIZONTAL FORMAT TABLETTE \\
@media screen and (max-width: 1450px) {
    @media screen and (min-width: 850px) {
    @media screen and (max-height: 950px) {
.container {
    width: 18rem; 
    height: 28rem;}  
.row1 {
    margin-top: 0rem;
    font-size: 3.5rem;}
.row2 {
    height: 14rem;
    font-size: 1.4rem;}
.row3 {
    font-size: 2.1rem;}
.row4 {
    font-size: 2.1rem;}
.image {
    width: 50rem;;
    top: -16rem;} 
    }}}
// TABLETTE FORMAT ----------------------- FORMAT TABLETTE \\
@media screen and (max-width: 950px) {
    @media screen and (min-height: 850px) {
    @media screen and (max-height: 1450px) {
.container {
    width: 18rem; 
    height: 28rem;}  
.row1 {
    margin-top: 0rem;
    font-size: 3.5rem;}
.row2 {
    height: 14rem;
    font-size: 1.4rem;}
.row3 {
    font-size: 2.1rem;}
.row4 {
    font-size: 2.1rem;}
.image {
    width: 50rem;;
    top: -16rem;} }}}       
    `;
    export default Card;
