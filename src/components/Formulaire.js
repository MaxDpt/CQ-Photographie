
    import styled from "styled-components"; 


    export default function Formulaire() {
    
        return (
        <Wrapper>

            <h2 className="title">Contact</h2>

            <form className="form">
                <div className="row">
                <label className="label">Email :</label>
                <input className="email" type='text' placeholder='email@exemple.com' />
                </div>
                <div className="row">
                <label className="label">Object :</label>
                <input className="object" type='text' placeholder='' />
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
        flex-direction: row;
        margin-top: 0.5rem;
    }
    .label {
        display: flex; 
        margin: auto 0;
        width: 7%;
        font-size: 18px;
    }
    .email, .object {
        background-color: #47555E;
        border: 2px solid white;
        font-size: 16px;
        width: 43%;
        border-radius: 0.4rem;
        height: 1.5rem;
        padding-left: 0.5rem;
    }
    .text-area {
        background-color: #47555E;
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

