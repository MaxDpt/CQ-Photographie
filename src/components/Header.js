
    import styled from "styled-components"; 


    export default function Header() {
    
        return (
        <Wrapper>
  
            <div className="left">
                <div className="logo"><img src=""/> </div>
            </div>
            <div className="right">
                <div className="fb"> <img src=""/> </div>
                <div className="insta"> <img src=""/> </div>
                <div className="lang"> <img src=""/> </div>
            </div>

        </Wrapper>
        );
    };
    
    const Wrapper = styled.div`
    
        display: flex; 
        justify-content: space-between;
        background-color: #212838;
        width: 100%;
        height: 6rem;
    
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

