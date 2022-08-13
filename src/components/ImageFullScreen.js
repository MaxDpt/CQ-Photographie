
import styled from "styled-components"; 
import React from "react";
// DONNEES DE L'IMAGE ------------------------------------------------
const ImageFullScreen = ({
    image = '',
}) => {
    const urlAppImage = 'https://strapi-data-app.herokuapp.com';
// RENDU -------------------------------------------------------------
return (
<Wrapper>
    <div className="openImage">
        <img className="image" alt="" src={urlAppImage+image.data.attributes.url} />
    </div>
</Wrapper> );
};

// CSS STYLE ---------------------------------------------------------
const Wrapper = styled.div`
background-color: rgba(0,0,0,0.75);
display: flex; 
position: fixed;
width: 100%;
height: 100%;
top: 0;
left: 0;
.openImage {
    display: flex; 
    position: fixed; 
    width: 80%;
    max-height: 90%;
    right: 10rem;
    bottom: 2rem;
    z-index: 3;}
.openImage img {
    width: 100%;}
// MOBILE FORMAT ----------------------------------- FORMAT MOBILE \\
@media screen and (max-width: 450px)    {
    @media screen and (max-height: 850px) {
.openImage {
    width: 100%;
    right: 0rem;
    bottom: 30%;
    z-index: 3;}
.openImage img {
    width: 100%;
    z-index: 3;} }}
// MOBILE FORMAT HORIZONTAL ----------------------- HORIZONTAL FORMAT MOBILE \\
@media screen and (max-width: 850px) { 
    @media screen and (max-height: 450px) {
.openImage {
    width: 100%;
    right: 0rem;
    bottom: 10%;
    z-index: 3;}
.openImage img {
    margin: auto;
    max-width: 80%;
    z-index: 3;} }};
    `;
    export default ImageFullScreen;
