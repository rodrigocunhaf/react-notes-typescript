import React from 'react';
import { NavLink } from 'react-router-dom';
import { ScreenBox } from '../../ScreenBox/ScreenBox';
import styled from 'styled-components';
import headerData from './headerData.json';

const HeaderContainer = styled.header`
    display:flex;
    justify-content:center;
    background-color:#006D77;
    min-height:10vh;
    align-items:center;

    a {
        margin:10px;
        padding:5px;
        text-decoration:none;
        color:white;
        font-size:1.5rem;

    }
    
    .isActive{
        border-bottom:5px solid black;
    }
`

const Header:React.FC = () => {
    return (
        <ScreenBox>
            <HeaderContainer>
                {
                    headerData.map ( item => {
                        return <NavLink   className={ linkProp => linkProp.isActive ? 'isActive' : ''}  to={item.to}>{item.buttonName}</NavLink>
                    })
                }
            </HeaderContainer>
        </ScreenBox>
    );
};

export { Header };