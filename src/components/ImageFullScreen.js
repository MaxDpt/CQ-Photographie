
import styled from "styled-components"; 
import React from "react";
// DONNEES DE L'IMAGE ------------------------------------------------
const ImageFullScreen = ({
    image = '',
}) => {
// RENDU -------------------------------------------------------------
return (
<Wrapper>
    <div className="openImage">
        <img className="image" alt="" src={image.data.attributes.url} />
    </div>
</Wrapper> );
};

// CSS STYLE ---------------------------------------------------------
const Wrapper = styled.div`
background-color: rgba(0,0,0,0.85);
display: flex; 
position: fixed;
justify-content: center;
width: 100%;
height: 100%;
top: 0;
left: 0;
.openImage {
    display: flex; 
    position: fixed; 
    max-width: 100%;
    z-index: 3;}
.openImage img {
    margin: auto;
    max-width: 90%;}
// MOBILE FORMAT ----------------------------------- FORMAT MOBILE \\
@media screen and (max-width: 450px)    {
    @media screen and (max-height: 850px) {
.openImage {
    top: 30%;
    z-index: 3;}
.openImage img {
    z-index: 3;
    width: 100%;} }}
// MOBILE FORMAT HORIZONTAL ----------------------- HORIZONTAL FORMAT MOBILE \\
@media screen and (max-width: 850px) { 
    @media screen and (max-height: 450px) {
.openImage {
    z-index: 3;}
.openImage img {
    margin: auto;
    max-width: 90%;
    z-index: 3;} }};
    `;
    export default ImageFullScreen;
