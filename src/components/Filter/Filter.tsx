import React, { useState } from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
    width:100%;
    background-color:#006D77;
    display:flex;
    justify-content:center;
    padding:10px;
    box-sizing:border-box;
    align-items: center;


    p {
        color:white;
        font-size: 1.4rem;
        margin-right:1rem;
    }

    .dropdown {
        display:flex;
        flex-direction:column;
        justify-content:center;
        position:relative;
    }
    
    .dropdown-display {
        background-color:white;
        height:100%;
        border-right:1px solid;
        border-top:1px solid;
        border-left:1px solid;
        border-bottom:1px solid;
        display:flex;
        justify-content:center;
        align-items:center;
        padding:12px;
        width:16px;
        cursor:pointer;
    }


    ul {
        list-style: none;
        box-sizing:border-box;
        display:flex;
        justify-content:center;
        flex-direction:column;
        position:absolute;
        left:0;
        width:100%;
        height: 18px;
        top: 22px;
      }

        li:nth-child(1) {
            position:absolute;
            left:0;
            width:100%;
            top:100%;
        }

        li:nth-child(2) {
            position:absolute;
            left:0;
            width:100%;
            top:300%;
        }
    }

    button {
        box-sizing:border-box;
        width:100%;
        border:0;
        border:1px solid;
        padding:10px;
        cursor:pointer;
    }
`

const Filter: React.FC = props => {

    const [isVisible, setIsVisible ] = useState <boolean> (false);
    const [currentValue , setCurrentValue] = useState <number> (8);
        
    const showDropdown = () =>{
        setIsVisible(!isVisible);
    };

    const changeCurrentValue = ( event:React.MouseEvent <HTMLButtonElement>) => {
        setCurrentValue(+event.currentTarget.value);
    };

    const onBlurHandler = (event:React.FocusEvent <HTMLElement>) => {
        if (!event.relatedTarget){
            return setIsVisible(false)
        };
    };

    const setVisible = isVisible ? 'unset' : 'none'

    return (
        <FilterContainer >
            <p>Itens by page:</p>
            <div className="dropdown" onClick={showDropdown}  onBlur={onBlurHandler} tabIndex={1}>
                <div className="dropdown-display">{currentValue}</div>
                <div className="dropdown-select" style={{display:setVisible}}>
                    <ul  >
                        <li><button  value={8} onClick={changeCurrentValue}>8</button></li>
                        <li><button value={15} onClick={changeCurrentValue}>10</button></li>
                    </ul>
                </div>
            </div>
        </FilterContainer>
    );
};

export { Filter };