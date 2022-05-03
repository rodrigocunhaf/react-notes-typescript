import React from "react";
import styled from "styled-components";

const WelcomeContainer =  styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:80vh;

    h1 {
        font-size:3rem;
    }
`

const Welcome:React.FC = ( ) => {


    return (
        <WelcomeContainer>
            <h1>WELCOME</h1>
        </WelcomeContainer>
    )
};

export { Welcome };