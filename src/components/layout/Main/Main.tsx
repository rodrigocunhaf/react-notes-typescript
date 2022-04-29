import React from 'react';
import { ScreenBox } from '../../ScreenBox/ScreenBox';
import { MainInterface } from './interfaces/main';


const Main:React.FC <MainInterface> = (props) => {
    return (
        <ScreenBox>
            {props.children}
        </ScreenBox>
    );
};

export { Main };