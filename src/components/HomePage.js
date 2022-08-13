import styled from "styled-components"; 
import * as React from 'react';
import { useEffect, useState }from "react";
import Image from "./Image";

export default function HomPage() {

const [isLoading, setIsLoading] = useState(true);
const [couverture, setCouverture] = useState(null);

// Appel API IMAGE COUVERTURE -----------------------------------------------
useEffect(() => {
    fetch('http://localhost:1337/api/logos/2?populate=*',
    {
        method: 'GET',
        headers: {'Accept': 'Application/json'}
    })
.then(res => res.json())
.then(res => {
    var data = Array(res.data);
    setCouverture(data);
    setIsLoading(false) })
}, [])
// -------------------------------------------------------------------------
return (
<Wrapper>
    {isLoading ? '...' : couverture.map(image => (
    <div className="containerImage">
        <Image {...image.attributes}/>
    </div> ) )}
</Wrapper> );
};
// CSS STYLE ----------------------------------------------------------------
const Wrapper = styled.div`
// MOBILE FORMAT ----------------------------------- FORMAT MOBILE \\
@media screen and (max-width: 450px) {
    @media screen and (max-height: 850px) {
    .containerImage {
        margin: auto;}
    .containerImage img {
        display: flex;
        width: 20rem;}} }
// MOBILE FORMAT HORIZONTAL ----------------------- HORIZONTAL FORMAT MOBILE \\
@media screen and (max-width: 850px) {
    @media screen and (max-height: 450px) { 
    .containerImage {
        margin: auto;}
    .containerImage img {
        display: flex;
        width: 30rem;}} }
`;