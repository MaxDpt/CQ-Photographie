
import styled from "styled-components"; 
import * as React from 'react';
import { useEffect, useState, useRef }from "react";
import emailjs from '@emailjs/browser';
import DeleteLogo from "./Icons/DeleteLogo";
import { Link } from "react-router-dom";

export default function Formulaire() {
    const urlApp = 'https://strapi-data-app.herokuapp.com/api';
    var [idPrestation, setIdPrestation] = useState(localStorage.getItem('idPrestation'));
    const [prestation, setPrestation] = useState (null);
    const [emailPerso,setEmailPerso] = useState('');
    var strEmailPerso = String(emailPerso);
    const [error, setError] = useState('');
    const [confirm, setConfirm] = useState('');
    const [name, setName] = useState('');
    const [ville, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [object, setObject] = useState('');
    const mobileSizeWidth = 450;

    // CALCUL TAILLE DE L'ECRAN -------------------------------------------------------
        var width = (window.screen.width);
        var height = (window.screen.height);
    

    // CALCUL DATE -----------------------------------------------------------
    var now = new Date();
    var jour    = now.getDate();
    var send = localStorage.getItem('SendDay');

    
    

    const formRef = useRef();
// SUBMIT FORM -------------------------------------------------------------
const handleForm = async (e) => {
    e.preventDefault()

    if (!send || send !== jour + 1) {
        localStorage.setItem('SendDay', jour);
    if (name !== '' & object !== '' & ville !== ''  & email !== '') {       
        setError('')
        emailjs.sendForm('service_wxfo1z1', 'template_aizkfyt', formRef.current, 'DOBj7QKzN7GIKHnxR')
        .then((result) => {
            console.log(result.text);},
            (error) => {
            console.log(error.text);});
        formRef.current.reset();
        setName('');
        setCity('');
        setEmail('');
        setObject('');
         
         setConfirm('CONFIRMATION : Votre fortmulaire a bien été transmit. Un email de confirmation vous à également été envoyé. ')
        setTimeout(() => {
            setConfirm('')
            }, 5000)
           } else {
            setError('ATTENTION : tous les champs requis ne sont pas remplis ou sont incorrectes.')}


    } else {
        setError('ATTENTION : Un message à déjà été envoyé. Vous pourrez recommencer dans 48H.')
    }

};

// Load data email -------------------------------------------------------
useEffect(() => {
    fetch(urlApp+'/email',
    { method: 'GET',
        headers: {'Accept': 'Application/json'} })
.then(res => res.json())
.then(res => {
        var email = Array(res.data.attributes.email);   
        setEmailPerso(email);
        }) }, [])
// ------------------------------------------------------------------------

// Load data prestation --------------------------------------------------
    useEffect(() => {
        if (idPrestation) {
        fetch(urlApp+'/prestations/'+idPrestation+'?populate=*',
        { method: 'GET',
            headers: {'Accept': 'Application/json'} })
    .then(res => res.json())
    .then(res => {
            var data = Array(res.data);
            var prestationName = Array(res.data.attributes.title);
            setPrestation(data);
            if (prestationName) {
                setObject(prestationName)
            };
            }) }}, [idPrestation])
// -----------------------------------------------------------------------
// Prestation link & delete -----------------------------------------------
const DeletePrestation = () => {
    localStorage.clear();
    setIdPrestation('');
    window.location.assign("/Contact");
}   
// -------------------------------------------------------------------------

// RENDU --------------------------------------------------------------------

return (
<Wrapper>

<h2 className="title">Contact</h2>

{error ?(
    <div className="errorMessage">
        <p>{error}</p>
    </div> ) : null}

{confirm ?(
<div className="confirmMessage">
    <p>{confirm}</p>
</div> ) : null}

<form id="formulaire" className="form" method="POST" ref={formRef} onSubmit={handleForm}> 
    <div className="containerA">
        <div className="containerB">
            <p className="titleText">Transmetez-nous vôtre choix par se formulaire.</p>
            <div className="row">
                {width > mobileSizeWidth & height >= mobileSizeWidth ?(<label className="label">Nom :</label>) : null}
                <input name="nom" className={`nom ${name === '' & error !== '' ? 'vide' : 'nom' }`} type='text'  placeholder='Nom*' onChange={input => setName(input.target.value)} />
            </div>
            <div className="row">
                {width > mobileSizeWidth & height >= mobileSizeWidth ?(<label className="label">Prenom :</label>) : null} 
                <input className="prenom" type='text' name="prenom" placeholder='Prenom'  />
            </div>
            <div className="row">
                {width > mobileSizeWidth & height >= mobileSizeWidth ?(<label className="label">Ville :</label>) : null} 
                <input className={`ville ${ville === '' & error !== '' ? 'vide' : 'ville' }`} type='text' name="ville" placeholder='ville*' onChange={input => setCity(input.target.value)} />
            </div>
            <div className="row">
                <label className="label">Date souhaité :</label>
                <input className="date" type='date' name="date"  />
            </div>
        </div>
    </div>

    <div className="container0">
        <div className="container1">
            <div className="EmailObject">
                <div className="row1">
                    <input className="email" type='email' name="emailPerso" value={strEmailPerso} />
                </div>
                <div className="row">
                    {width > mobileSizeWidth & height >= mobileSizeWidth ?(<label className="label">Email :</label>) : null} 
                    <input className={`email ${ email === '' & error !== '' ? 'vide' : 'email' }`} type='email' name="email" placeholder='email@exemple.com*' onChange={input => setEmail(input.target.value)} />
                </div>
                <div className="row">
                    {width > mobileSizeWidth & height >= mobileSizeWidth ?(<label className="label">Object :</label>) : null} 
                    <input className={`object ${ object === '' & error !== '' ? 'vide' : 'object' }`} type='text' name="object" placeholder='object*' defaultValue={object} onChange={input => setObject(input.target.value)} />
                </div>
            </div>
            <p className="error"> Les champs portant le sympole *, sont obligatoire.</p>
        </div>

        <div className="container2">
            <div className="Prestation">
                {!prestation ? (<div>
                    <Link className='links' to ="/Prestations"> 
                    <button className="link" type="button"><h1> Cliquer ici</h1> <p>et choisissez une préstation.</p><br/>
                    <p>Pour préciser le service souhaité.</p>
                    </button>
                    </Link>
                </div>) 
                : (prestation.map(presta => (
                <div>
                    <p className="line"> Préstation :  {presta.attributes.title} </p>
                    <p className="line"> Au prix : {presta.attributes.prix} euro/TTC</p>
                    <button className="Delete" type="button" onClick={DeletePrestation}><DeleteLogo/></button>
                    <img className="imagePresta" alt="" src={presta.attributes.image.data.attributes.url}/>                
                </div>
                ) ))}                       
            </div>
        </div>
    </div>

    <div className="containerX">
        <div className="containerY">
            <textarea className="text-area" type='text'  name="message" placeholder='Ecrivez ici' />
        </div>
        <div className="containerZ">
            <button className="Send" type="submit" ><p>Envoyer</p></button>
        </div>
    </div>
</form>
        </Wrapper>
        );
    };
// STYLE CSS --------------------------------------------------------------------------
const Wrapper = styled.div`
    display: flex; 
    justify-content: center;
    flex-direction: column;
    margin: auto;
    width: 60rem;
// GLOBAL ---------------------------------------------------------
.title {
    margin: 2rem auto;
    font-size: 58px;}
.form {
    display: flex; 
    flex-direction: column;
    margin-bottom: 2rem ;
    width: 100%;}
.row {
    display: flex; 
    width: 100%;
    flex-direction: row;
    padding-bottom: 1rem;}
.row1 {
    display: flex; 
    position: absolute;
    visibility: hidden;}
.label {
    display: flex; 
    font-family: 'Nunito', sans-serif;
    margin: auto 0.5rem;
    width: 25%;
    font-size: 20px;}
// BLOC 1 --------------------------------------------------------
.containerA {
    background-color: #02111f;
    border: 2px solid white;
    border-radius: 10px;
    display: flex;
    flex-direction: column; 
    margin: auto;
    width: 100%;}
.containerB {
    display: flex;
    flex-direction: column; 
    width: 65%;
    margin: auto;}
.titleText {
    margin: 1rem auto;
    font-size: 1.2rem;;}
.nom, .prenom, .date, .ville {
    outline: none;
    background-color: white;
    border: 2px solid white;
    margin: auto;
    font-size: 16px;
    width: 75%;
    border-radius: 0.4rem;
    height: 1.5rem;
    padding-left: 0.5rem;}
.date {
    width: 25%;}
//BOLC 2 ---------------------------------------------------------
.container0 {
    border: 2px solid white;
    border-radius: 10px;
    display: flex; 
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 12rem;
    overflow: hidden;
    margin: 0.5rem auto;}
.container1 {
    background-color: #02111f;
    display: flex;
    flex-direction: column; 
    width: 60%;}
.container2 {
    background-color: #02111f;
    overflow: hidden;
    display: flex; 
    width: 40%;}
.EmailObject {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: auto;
}
.email, .object {
    outline: none;
    background-color: white;
    border: 2px solid white;
    font-size: 16px;
    width: 75%;
    border-radius: 0.4rem;
    height: 1.5rem;
    padding-left: 0.5rem;}
// PRESTATION ----------------------------------------------------
.Prestation {
    display: flex;
    justify-content: center;
    overflow: hidden;
    width: 100%;}
.Prestation a {
    display: flex;
    flex-direction: column;}
.Prestation a:hover {
    cursor: pointer;}
.line {
    background-color: rgba(0,0,0,0.4);
    display: flex;
    justify-content: center;
    width: 30rem; 
    height: 2rem;
    margin-left: 0rem;
    padding-left: 1rem;
    padding-top: 1rem;
    position: relative;
    font-size : 1.2rem;
    z-index: 2;}
.links {
    display: flex;
    margin-top: 2rem;
    width: 15rem;
    height: 8rem;
    }
.link {
    border: none;
    border-radius: 10px;
    padding: 0.5rem 1rem;}
.link:hover {
    cursor: pointer;
}
.imagePresta {
    overflow: hidden;
    display: flex;
    position: relative;
    margin-top: -9rem;
    margin-left: -5rem;
    width: 40rem;
    z-index: 0;}
.Delete {
    background-color: transparent;
    border: none;
    display: flex; 
    position: relative;
    bottom: 5rem;
    left: 26.5rem;
    z-index: 3;}
.Delete:hover {
    cursor: pointer;
}
//BLOC 3 ---------------------------------------------------------
.containerX {
    background-color: #02111f;
    border: 2px solid white;
    border-radius: 10px;
    display: flex;
    flex-direction: row; 
    width: 100%;
    overflow: hidden;}
.containerY {
    display: flex;
    width: 80%;}
.containerZ {
    display: flex;
    width: 20%;}
// TEXT-AREA ------------------------------------------------------
.text-area {
    background-color: white;
    border: 2px solid white;
    font-size: 16px;
    width: 100%;
    padding-bottom: 7rem;
    padding-top: 0.5rem;
    padding-left: 0.5rem;}
textarea:valid, textarea:invalid  {
        border: none;
        outline: none;
    }
// SEND BUTON -----------------------------------------------------
.Send {
    display: flex;
    color: white;
    height: 10rem; 
    width: 12rem; 
    background-color: #02111f;
    margin: auto;
    border: none;}
.Send p {
    margin: auto;
    font-size: 28px;}
.Send:hover {
    cursor: pointer;
    background-color:#323d44;}
// ERROR & CONFIRM MESSAGE ----------------------------------------
.error {
    margin-bottom: 1rem;
    text-align: center;}
.errorMessage {
    background-color: #d07b8c;
    border-radius: 10px;
    box-shadow: 0px 2px 10px 2px #02111f;
    margin: 1rem auto;
    padding: 1rem 0.5rem;;
    width: auto;
    text-align: center;}
.confirmMessage {
    background-color: #7bd0a1;
    border-radius: 10px;
    box-shadow: 0px 2px 10px 2px #02111f;
    margin: 1rem auto;
    padding: 1rem 0.5rem;;
    width: auto;
    text-align: center;}
.vide {
    border: solid red 2px;
    box-shadow: 0px 2px 10px 2px #d07b8c;}
// ------------------------------------------------------------------

// MOBILE FORMAT ----------------------------------- FORMAT MOBILE \\
@media screen and (max-width: 450px) { 
    @media screen and (max-height: 850px) {
// GLOBAL -----------------------------------------------------------
.form {
    background-color: #02111f;
    margin-bottom: 0rem ;}
.title {
    margin-top: -2rem;
    font-size: 58px;}
.label {
    font-size: 1rem;}
// Bloc 1 -----------------------------------------------------------
.containerA {
    border: none;
    border-radius: 0px;
    margin: 0 auto;}
.containerB {
    width: 90%; }

.titleText {
    margin: 1rem auto;
    font-size: 0.9rem;;}
.nom, .prenom, .date, .ville {
    font-size: 0.9rem;
    width: 90%;}
.date {
    width: 60%;}
// BLOC 2 ------------------------------------------------------------
.container0 {
    margin: 0 auto;
    border: none;
    border-radius: 0px;
    flex-direction: column;
    height: 18rem;}
.container1 {
    padding: 0.5 0rem;
    width: 100%;}
.email, .object {
    margin: auto;
    width: 90%;
    font-size: 0.9rem;} 
.container2 {        
    justify-content: center;
    padding: 0.5rem;
    width: 100%;} 
// PRESTATION -----------------------------------------------------------
.links {
    margin-top: 0rem;}
.Prestation {
    margin: auto;
    font-size: 0.9rem;}
.line {
    width: 21.5rem;
    height: 2rem;
    margin-left: -1rem;
    padding-left: 0rem;
    padding-top: 0.5rem; 
    font-size : 1.1rem; 
    z-index: 2;}
.imagePresta {
    margin-top: -8rem;
    margin-left: -1.5rem;
    width: 22rem;
    z-index: 0;}
.Delete {
    left: 18rem;}
// BLOC 3 -----------------------------------------------------------------
.containerX {
    margin-top: 0.5rem;
    border: none;
    background-color: #323d44;
    border-radius: 0px;}
.containerY {
    display: flex;
    width: 75%;}
.containerZ {
    display: flex;
    width: 25%;}
// TEXT AREA ---------------------------------------------------------------
.text-area {
    font-size: 0.9rem;
    padding-bottom: 6rem;}
// SEND BUTTON --------------------------------------------------------------
.Send {
    background-color: #323d44;
    height: 6rem;}
.Send p {
    font-size: 1.1rem;} } }
// MOBILE FORMAT HORIZONTAL ----------------------- HORIZONTAL FORMAT MOBILE \\
@media screen and (max-width: 850px) {
    @media screen and (max-height: 450px) { 
// GLOBAL -----------------------------------------------------------
.form {
    background-color: #02111f;}
.title {
    margin-top: -2rem;
    font-size: 58px;}
.label {
    width: 15%;
    font-size: 1rem;}
// Bloc 1 -----------------------------------------------------------
.containerA {
    border: none;
    border-radius: 0px;
    margin: 0 auto;}
.containerB {
    width: 90%; }
.titleText {
    margin: 1rem auto;
    font-size: 0.9rem;;}
.nom, .prenom, .date, .ville {
    font-size: 0.9rem;
    width: 70%;}
.date {
    width: 20%;}
// BLOC 2 ------------------------------------------------------------
.container0 {
    margin: 0 auto;
    border: none;
    border-radius: 0px;
    flex-direction: column;
    height: 18rem;}
.container1 {
    padding: 0.5 0rem;
    width: 100%;}
.email, .object {
    font-size: 0.9rem;
    width: 70%;} 
.container2 {        
    justify-content: center;
    padding: 0.5rem;
    width: 100%;} 
// PRESTATION -----------------------------------------------------------
.links {
    display: flex;
    margin-top: 0rem;
    width: 15rem;
    height: 8rem;
    }
.Prestation {
    margin: auto;
    font-size: 0.9rem;}
.line {
    width: 22rem;
    height: 2rem;
    margin-left: 0rem;
    padding-left: 0rem;
    padding-top: 0.5rem; 
    font-size : 1.1rem; 
    z-index: 2;}
.imagePresta {
    margin-top: -8rem;
    margin-left: 0rem;
    width: 22rem;
    z-index: 0;}
.Delete {
    left: 19rem;}
// BLOC 3 -----------------------------------------------------------------
.containerX {
    margin-top: 0.5rem;
    border: none;
    border-radius: 0px;}
.containerY {
    display: flex;
    width: 75%;}
.containerZ {
    display: flex;
    width: 25%;}
// TEXT AREA ---------------------------------------------------------------
.text-area {
    font-size: 0.9rem;
    padding-bottom: 6rem;}
// SEND BUTTON --------------------------------------------------------------
.Send {
    height: 6rem;}
.Send p {
    font-size: 1.1rem;}}}
// TABLETTE FORMAT ----------------------- FORMAT TABLETTE \\
@media screen and (max-width: 950px) {
@media screen and (min-height: 850px) {
@media screen and (max-height: 1450px) {
// Bloc 1 -----------------------------------------------------------
.containerA { 
    width: 99%;}
.containerB {
    width: 75%;
    margin: auto;}
.nom, .prenom, .date, .ville {
    margin: 0.5rem 0;
    font-size: 16px;
    width: 85%;
    height: 1.5rem;
    padding-left: 0.5rem;}
// Bloc 2 -----------------------------------------------------------
.container0 { 
    width: 99%;
    height: 13rem;}
.email, .object {
    margin: 0.5rem 0;} 
.link {
    font-size: 1rem;
    margin: auto;
    margin-top: -0.5rem;}
.Delete {
    left: 25rem;}
// Bloc 3 -----------------------------------------------------------
.containerX { 
    width: 99.5%;}
.containerY {
    display: flex;
    width: 75%;}
.containerZ {
    display: flex;
    width: 25%;}}}}
    `;

