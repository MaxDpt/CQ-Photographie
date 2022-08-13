import styled from "styled-components"; 
import * as React from 'react';
import { useEffect, useState }from "react";

import Card from "./Card";
export default function Cards() {

const urlApp = 'https://strapi-data-app.herokuapp.com/api'
const [isLoading, setIsLoading] = useState(true);
const [cards, setCards] = useState(null);
// APPEL API DE TOUTES LES PRESTATIONS --------------------------------
useEffect(() => {
    fetch(urlApp+'/prestations?populate=*',
    {
        method: 'GET',
        headers: {'Accept': 'Application/json'}
    })
.then(res => res.json())
.then(res => {
    setTimeout(() => {
        var data = Array.from(res.data);
        setCards(data);
        setIsLoading(false)
    }, 100)
    })
}, [])
// RENDU ----------------------------------------------------------------
return (
<Wrapper>
    <div className="container1">
        {isLoading ? 'Loading...' : cards.map(card => (
        <div className="card">
            <Card {...card.attributes} {...card}/>
        </div> ) )}
    </div>
</Wrapper> );
};
// STYLE CSS ----------------------------------------------------------
const Wrapper = styled.div`
.container1 {
    display: flex;
    margin: auto;
    flex-wrap: wrap;
    justify-content: center;
    width: 70%;}
.card {
    margin: 1.5rem;}
// MOBILE FORMAT ----------------------------------- FORMAT MOBILE \\
@media screen and (max-width: 450px) { 
.container1 {
    width: 100%;}
.card {
    margin: 0.5rem;}}
// MOBILE FORMAT HORIZONTAL ----------------------- HORIZONTAL FORMAT MOBILE \\
@media screen and (max-width: 850px) {
    @media screen and (max-height: 450px) { 
.container1 {
    width: 100%;}
.card {
    margin: 0.5rem;}}}
// TABLETTE FORMAT HORIZONTAL ----------------------- HORIZONTAL FORMAT TABLETTE \\
@media screen and (max-width: 1450px) {
    @media screen and (min-width: 850px) {
    @media screen and (max-height: 950px) {
.container1 {
    width: 100%;}
.card {
    margin: 0.5rem;} }}}
// TABLETTE FORMAT ----------------------- FORMAT TABLETTE \\
@media screen and (max-width: 950px) {
    @media screen and (min-height: 850px) {
    @media screen and (max-height: 1450px) {
.container1 {
    width: 100%;}
.card {
    margin: 0.5rem;}       
    }}}
`;