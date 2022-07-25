
import styled from "styled-components"; 
import * as React from 'react';
import { useEffect, useState, useRef }from "react";
import emailjs from '@emailjs/browser';
import DeleteLogo from "./Icons/DeleteLogo";

export default function Formulaire() {
    
    var idPrestation = localStorage.getItem('idPrestation');
    const [isLoading, setIsLoading] = useState(true);
    const [prestation, setPrestation] = useState (null);
    const [prestationName, setPrestationName] = useState();
    const [emailPerso,setEmailPerso] = useState('');
    const [error, setError] = useState('');

    const inputs  = useRef([]);
    const formRef = useRef();

    // ADD INPUT IN USER TAB -------------------------
    const addInputs = el => {
        if(el && !inputs.current.includes(el)) {
            inputs.current.push(el)
        };
    };
    // -----------------------------------------------

    // SUBMIT FORM -----------------------------------
    const handleForm = async (e) => {
        e.preventDefault()

        if (inputs.current[0].value != '', inputs.current[2].value != '',
         inputs.current[5].value != '' , inputs.current[6].value != '') {
                
                emailjs.sendForm('service_wxfo1z1', 'template_aizkfyt', 'form', 'DOBj7QKzN7GIKHnxR')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        
                formRef.current.reset();
                localStorage.clear();
                window.location.reload();
            } else {
                console.log('Champs incomplet')
                setError('ATTENTION : tous les champs requis ne sont pas remplis.')
            }
    };
    // -----------------------------------------------
    // Load data prestation --------------------------
    if (idPrestation) {
        useEffect(() => {
            fetch('http://localhost:1337/api/prestations/'+idPrestation+'?populate=*',
            { method: 'GET',
                headers: {'Accept': 'Application/json'} })
        .then(res => res.json())
        .then(res => {
                var data = Array(res.data);
                var prestationName = Array(res.data.attributes.title);
                setPrestation(data);
                setPrestationName(prestationName); 
                setIsLoading(false)
                }) }, [])
    }
    // -----------------------------------------------
    // Load data email -------------------------------
    useEffect(() => {
        fetch('http://localhost:1337/api/email',
        { method: 'GET',
            headers: {'Accept': 'Application/json'} })
    .then(res => res.json())
    .then(res => {
            var email = Array(res.data.attributes.email);   
            setEmailPerso(email);
            }) }, [])
    // -----------------------------------------------
    // Prestation link & delete ----------------------
    const link = () => {
        window.location.href='/Prestations';
    }
    const DeletePrestation = () => {
        localStorage.clear();
        window.location.reload();
    }
    // ----------------------------------------------

        return (
        <Wrapper>

            <h2 className="title">Contact</h2>

            <form className="form" method="POST" ref={formRef} onSubmit={handleForm} id='form'> 

                <div className="container0">
                    <div className="container1">
                        <div className="containerA">
                        <div className="row">
                                <label className="label">Nom* :</label>
                                <input className="nom" type='text' name="nom" placeholder='Nom' ref={addInputs} />
                            </div>
                            <div className="row">
                                <label className="label">Prenom :</label>
                                <input className="prenom" type='text' name="prenom" placeholder='prenom' ref={addInputs} />
                            </div>
                            <div className="row">
                                <label className="label">Ville* :</label>
                                <input className="ville" type='text' name="ville" placeholder='ville' ref={addInputs} />
                            </div>
                            <div className="row">
                                <label className="label">Date souhaité :</label>
                                <input className="date" type='date' name="date" ref={addInputs} />
                            </div>
                        </div>
                        <div className="EmailObject">
                        <div className="row1">
                            <input className="email" type='email' name="emailPerso" value={emailPerso} />
                        </div>
                        <div className="row">
                            <label className="label">Email* :</label>
                            <input className="email" type='email' name="email" placeholder='email@exemple.com' ref={addInputs} />
                        </div>
                        <div className="row">
                            <label className="label">Object* :</label>
                            <input className="object" type='text' name="object" placeholder='' value={prestationName} ref={addInputs} />
                        </div>
                        </div>
                        <p className="error"> Les champs portant le sympole *, sont obligatoire.</p>
                    </div>

                    <div className="container2">
                        <div className="Prestation">
                        {!prestation ? (<div>
                            <a className="link" onClick={link}><h1> Cliquer ici</h1> <p>pour choisir une préstation.</p><br/>
                            <p>Afin de préciser le service souhaité.</p>
                            <p>Ce choix n'est en aucun cas définitif.</p></a>
                        </div>) 
                        : prestation.map(presta => (
                        <div>
                            <p className="line"> Préstation :  {presta.attributes.title} </p>
                            <p className="line"> Au prix : {presta.attributes.prix} euro/TTC</p>
                            <a className="Delete" onClick={DeletePrestation}><DeleteLogo/></a>
                            <img className="image" src={'http://localhost:1337'+presta.attributes.image.data.attributes.url}/>
                
                            
                        </div>
                        ) )}                       
                        </div>
                    </div>

                </div>

                {error ?(
                <div className="errorMessage">
                    <p>{error}</p>
                </div> ) : null}
                
                    <input className="text-area" type='text-area'  name="message" placeholder='Ecrivez ici' ref={addInputs} />
                
                <button className="Send" type="submit" ><p>Envoyer</p></button>
            </form>
        </Wrapper>
        );
    };
    
    const Wrapper = styled.div`
    display: flex; 
    justify-content: center;
    flex-direction: column;
    margin: auto;
    width: 60rem;


    .containerA {
        display: flex;
        flex-direction: column; 
        margin: 1rem auto;
        width: 95%;
    }

    .container0 {
        border: 2px solid white;
        border-radius: 10px;
        display: flex; 
        justify-content: center;
        flex-direction: row;
        width: 100%;
        height: 24rem;
        overflow: hidden;
    }
    .container1 {
        background-color: #02111f;
        display: flex;
        flex-direction: column; 
        width: 50%;
        
    }
    .container2 {
        background-color: #02111f;
        overflow: hidden;
        display: flex; 
        width: 50%;

    }
    .Prestation {
        display: flex;
        font-size: 1.2rem;
        margin: auto; 
        width: 80%;
    }
    
    .Prestation a {
        display: flex;
        flex-direction: column;
    }
    .Prestation a:hover {
        cursor: pointer;
    }
    .Delete {
        display: flex; 
        position: relative;
        bottom: 4.5rem;
        left: 25rem;
        z-index: 3;
        
    }
    .line {
        background-color: rgba(0,0,0,0.4);
        display: flex;
        width: 30rem;
        height: 2rem;
        margin-left: -3rem;
        padding-left: 1rem;
        padding-top: 0.5rem;
        position: relative;
        font-size : 1.4rem;
        z-index: 2;
    }
    .link {
        border: dashed 2px white;
        padding: 0.5rem;
        margin-left: 3rem;
    }
    .image {
        display: flex;
        position: relative;
        margin-top: -8rem;
        margin-left: -8rem;
        width: 40rem;
        z-index: 0;
    }
    .title {
        margin: 2rem auto;
        font-size: 58px;
    }

    .form {
        display: flex; 
        flex-direction: column;
        width: 100%;
    }
    .EmailObject {
        display: flex;
        flex-direction: column;
        width: 95%;
        margin: auto;
    }
    .row {
        display: flex; 
        width: 100%;
        flex-direction: row;
        padding-bottom: 1rem;
    }
    .row1 {
        display: flex; 
        position: absolute;
        visibility: hidden;
    }
    .label {
        display: flex; 
        margin: auto 0.5rem;
        width: 20%;
        font-size: 20px;
    }
    .email, .object {
        background-color: white;
        border: 2px solid white;
        font-size: 16px;
        width: 75%;
        border-radius: 0.4rem;
        height: 1.5rem;
        padding-left: 0.5rem;
    }
    .nom, .prenom, .date, .ville {
        background-color: white;
        border: 2px solid white;
        font-size: 16px;
        width: 75%;
        border-radius: 0.4rem;
        height: 1.5rem;
        padding-left: 0.5rem;
    }
    .date {
        width: 25%;
    }
    .error {
        margin: auto;
        text-align: center;
    }
    .errorMessage {
        background-color: #d07b8c;
        border-radius: 10px;
        box-shadow: 0px 2px 10px 2px #02111f;
        margin: 1rem auto;
        padding: 1rem 0.5rem;;
        width: auto;
        text-align: center;
    }
    .text-area {
        background-color: white;
        border: 2px solid white;
        font-size: 16px;
        width: 99%;
        margin-top: 0.5rem;
        padding-bottom: 10.5rem;
        padding-top: 0.5rem;
        padding-left: 0.5rem;
        border-radius: 10px;
    }
    .Send {
        display: flex;
        height: 4rem; 
        width: 10rem; 
        background-color: #212838;
        margin: 2rem auto;
        border-radius: 0.4rem;
        border: solid 2px white;
    }
    .Send p {
        margin: auto;
        font-size: 28px;
    }
    .Send:hover {
        cursor: pointer;
    }
    `;

