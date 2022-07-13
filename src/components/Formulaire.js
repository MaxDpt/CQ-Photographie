
    import styled from "styled-components"; 
    import * as React from 'react';
    import { useEffect, useState }from "react";


    export default function Formulaire() {
    
        var idPrestation = localStorage.getItem('idPrestation');
        const [isLoading, setIsLoading] = useState(true);
        const [prestation, setPrestation] = useState (null);
        const [prestationName, setPrestationName] = useState (null);

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
        const link = () => {
            window.location.href='/Prestations';
        }

        return (
        <Wrapper>

            <h2 className="title">Contact</h2>

            <form className="form">
                <div className="container0">
                    <div className="container1">
                        <div className="row">
                            <label className="label">Email :</label>
                            <input className="email" type='text' placeholder='email@exemple.com' />
                        </div>
                        <div className="row">
                            <label className="label">Object :</label>
                            <input className="object" type='text' placeholder='' value={prestationName} />
                        </div>
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
                            <img className="image" src={'http://localhost:1337'+presta.attributes.image.data.attributes.url}/>
                        </div>
                        ) )}                       
                        </div>
                    </div>
                </div>


                
                    <input className="text-area" type='text-area' placeholder='Ecrivez ici' />
                
                <a className="Send"><p>Envoyer</p></a>
            </form>
        </Wrapper>
        );
    };
    
    const Wrapper = styled.div`
    display: flex; 
    justify-content: center;
    flex-direction: column;
    margin: auto;
    width: 50%;

    .container0 {
        border: 1px solid white;
        display: flex; 
        justify-content: center;
        flex-direction: row;
        width: 100%;
        height: 10rem;
    }
    .container1 {
        border: 1px solid white;
        display: flex;
        flex-direction: column; 
        width: 50%;
        
    }
    .container2 {
        overflow: hidden;
        border: 1px solid white;
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
    .line {
        background-color: rgba(0,0,0,0.4);
        display: flex;
        width: 30rem;
        height: 2rem;
        margin-left: -3rem;
        padding-left: 1rem;
        padding-top: 0.5rem;
        position: relative;
        font-size 1.2rem;
        z-index: 2;
    }
    .image {
        display: flex;
        position: relative;
        margin-top: -6.5rem;
        margin-left: -8rem;
        width: 40rem;
        z-index: 0;
    }
    .title {
        margin: 2rem auto;
        font-size: 38px;
    }

    .form {
        display: flex; 
        flex-direction: column;
        width: 100%;
    }
    .row {
        display: flex; 
        width: 100%;
        flex-direction: row;
        margin-top: 0.5rem;
    }
    .label {
        display: flex; 
        margin: auto 0.5rem;
        width: 15%;
        font-size: 20px;
    }
    .email, .object {
        background-color: #47555E;
        border: 2px solid white;
        color: white;
        font-size: 16px;
        width: 75%;
        border-radius: 0.4rem;
        height: 1.5rem;
        padding-left: 0.5rem;
    }
    .text-area {
        background-color: #47555E;
        color: white;
        border: 2px solid white;
        font-size: 16px;
        margin-top: 0.5rem;
        padding-bottom: 19.5rem;
        padding-top: 0.5rem;
        padding-left: 0.5rem;
        border-radius: 0.4rem;
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
    `;

