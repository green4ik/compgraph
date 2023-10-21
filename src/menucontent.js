import BookImage from './images/book.png';
import InfoImage from './images/info.png';
import FractalImage from './images/fractal.png';
import QuestionImage from './images/question.png'
import { Button } from './Button';
import React, { useState } from 'react';
import { ImageChanger } from './learnyourwayup';
import {Routes, Route } from 'react-router-dom';
export function Menucontent(props) {
    
    return (
        
          <div className="body-content">
            <div className="body-buttons">
        <Button link = "/home1"isItalic = {props.bool1} className = "button b1" text ="Фрактали" />
        <Button link = "/home2"isItalic = {props.bool2} className = "button b2" text ="Колірні схеми" />
        <Button link = "/home3"isItalic = {props.bool3} className = "button b3" text ="Рухомі зображення" />
        </div>
        <div className='right-body'>
        <div className='body-image'>
        {/* <ImageChanger  image = {BookImage} /> */}
        <img className="body-image-book"src = {props.image}></img>
    <p className="text-style">{props.text}</p>
        </div>
        <div className='start-button'>
            <Button link = {props.link} className = "button b4" text = "Розпочати"/>
            <img className = "question-body"src = {QuestionImage}></img>
            </div>
        </div>
        
        </div>
    
    )
}
