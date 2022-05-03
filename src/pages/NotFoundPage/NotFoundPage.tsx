import React from "react";
import styled from "styled-components";

const NotFoundContainer =  styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:80vh;

    h1 {
        font-size:3rem;
    }
`

const NotFound:React.FC = ( ) => {

    return (
        <NotFoundContainer>
            <h1>404 Not Found</h1>
        </NotFoundContainer>
    )
};

export { NotFound };