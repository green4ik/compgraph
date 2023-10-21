
import { ImageChanger } from "./learnyourwayup";
import React, { useState } from 'react';
import FractalImage from './images/fractal.png';
import { Link, useNavigate } from 'react-router-dom';
export function Button(props) {
    const navigate = useNavigate();
    const buttonStyle = {
        fontStyle: props.isItalic ? 'italic' : 'normal', // Применяем стиль к шрифту в зависимости от состояния
      };
    return (
        <button 
        onClick={() => {
       console.log(props.link);
        navigate(props.link);
    }
        }
        className={props.className}
        style={buttonStyle}>
            {props.text}
        </button>
    )
}