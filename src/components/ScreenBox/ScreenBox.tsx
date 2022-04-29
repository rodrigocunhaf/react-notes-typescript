import React from "react";
import { ScreenBoxInterface } from './interfaces/screen-box-interface';
import style from './screen-box.module.css';

const ScreenBox:React.FC <ScreenBoxInterface> = ( props ) => {

    return <div className={style.container}>{props.children}</div>
};

export  { ScreenBox };