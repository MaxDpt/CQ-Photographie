
    import styled from "styled-components"; 
    import * as React from 'react';
    import { useEffect, useState }from "react";
    import DeleteLogo from "./Icons/DeleteLogo";

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
        const DeletePrestation = () => {
            localStorage.clear();
            window.location.reload();
        }

        return (
        <Wrapper>

            <h2 className="title">Contact</h2>

            <form className="form">
                <div className="container0">
                    <div className="container1">
                        <div className="EmailObject">
                        <div className="row">
                            <label className="label">Email :</label>
                            <input className="email" type='text' placeholder='email@exemple.com' />
                        </div>
                        <div className="row">
                            <label className="label">Object :</label>
                            <input className="object" type='text' placeholder='' value={prestationName} />
                        </div>
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
                            <a className="Delete" onClick={DeletePrestation}><DeleteLogo/></a>
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
    max-width: 60rem;

    .container0 {
        border: 2px solid white;
        border-radius: 10px;
        display: flex; 
        justify-content: center;
        flex-direction: row;
        width: 100%;
        height: 10rem;
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
        font-size 1.2rem;
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
    .label {
        display: flex; 
        margin: auto 0.5rem;
        width: 15%;
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
    .text-area {
        background-color: white;
        border: 2px solid white;
        font-size: 16px;
        width: 99%;
        margin-top: 0.5rem;
        padding-bottom: 19.5rem;
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

