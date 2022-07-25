import styled from "styled-components"; 
import React from "react";
import Formulaire from "components/Formulaire";
import Envelope from "components/Icons/Envelope";
import HatLogo from "components/Icons/HatLogo";
import Send from "components/Icons/Send";
export default function Contact() {

    return (
    <Wrapper>
        <div className="Envelope"><Envelope/></div>
        <div className="HatLogo"><HatLogo/></div>
        <div className="SendLogo"><Send/></div>
        <div className="Formulaire"><Formulaire/></div>
        
    </Wrapper>
    );
};

const Wrapper = styled.div`
.Envelope {
    display: flex;
    position: absolute;
    color: #323d44;
    top: 10rem;
    left: 8rem;
    z-index: 0;
    transform: rotate(-45deg);
}
.HatLogo {
    display: flex;
    position: absolute;
    color: #323d44;
    top: 30rem;
    left: 90rem;
    z-index: 0;
    transform: rotate(45deg);
}
.SendLogo {
    display: flex;
    position: absolute;
    color: #323d44;
    top: 50rem;
    left: 10rem;
    z-index: 0;
    transform: rotate(18deg);
}
.Formulaire {
    display: flex;
    position: relative;
    z-index: 2;
}
`;