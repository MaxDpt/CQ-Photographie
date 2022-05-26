
    import styled from "styled-components"; 
    import React, {useState, useEffect} from 'react';
    import { firestore } from "api/firebase";


    export default function Header() {

        var [photoLogo, setPhotoLogo] = useState();
        
// Lecture API ------------------------------------------------------------------
        useEffect(() => {
            firestore.collection("AppContent").doc("images")
            .onSnapshot((doc) => {
                if (doc.exists){
                    var images = doc.data();
                    setPhotoLogo(photoLogo = images.photoLogo);
                } else {
                    console.log("No such document!");
                }});
        });     
// ------------------------------------------------------------------------------
// AppContent CLASS -------------------------------------------------------------
    class AppContent {
        constructor ( photoLogo ) {
            this.photoLogo = photoLogo;
    }}; 
    var app = new AppContent( photoLogo );
// ------------------------------------------------------------------------------

console.log(app.photoLogo)

const HeaderColor = styled.div`
background-color: #212838;
display: flex; 
justify-content: space-between;
width: 100%;
height: 6rem;


`;


        return (
        <HeaderWrapper>
            <HeaderColor>
            <div className="left">
                <div className="logo"><img src={app.photoLogo}/> </div>
            </div>
            <div className="right">
                <div className="fb"> <img src=""/> </div>
                <div className="insta"> <img src=""/> </div>
                <div className="lang"> <img src=""/> </div>
            </div>
            </HeaderColor>
        </HeaderWrapper>
        );
    };

    
    const HeaderWrapper = styled.div`


    
    .left {
        margin-top: 0.5rem;
        display: flex; 
        width: 75%;
    }
    .right {
        margin-top: 0.5rem;
        display: flex; 
        justify-content: space-between;
        width: 25%;
    }
    
    .logo {
        display: flex; 
        border: 2px solid white;
        margin: 0.5rem;
        width: 4rem;
        height: 4rem;
    }
    .fb {
        display: flex; 
        border: 2px solid white;
        margin: 0.5rem;
        width: 4rem;
        height: 4rem;
    }
    .insta {
        display: flex; 
        border: 2px solid white;
        margin: 0.5rem;
        width: 4rem;
        height: 4rem;
    }

.lang {
    display: flex; 
    border: 2px solid white;
    margin: 0.5rem;
    width: 4rem;
    height: 4rem;
}
    `;

