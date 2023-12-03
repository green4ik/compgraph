import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import { BackMenu } from './background';
import { Slider } from './Sliders/slider1-10';
import CanvasVichek from './CanvasVichek';
import QuestionImage from './images/question.png';
import BackImage from './images/back.png';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './Button';
import './App.css';

export function FractalPage1() {
  const [depth, setDepth] = useState(0); 
  const navigate = useNavigate();
  const handleDepthChange = (newDepth) => {
    setDepth(newDepth);
  };

  return (
    <div>
      <BackMenu text="Фрактали" />
      <div className='slider-canvas-container'>
        <div  className='images-above'>
          
          <img className='book-image left' src={QuestionImage} alt="Question" />
        </div>
        <Slider depth={depth} onDepthChange={handleDepthChange} />
        <div className='canvasVicsek'>
          <CanvasVichek depth={depth} />
        </div>
        <div className='button-container'>
          <Button text="Фрактал Вічека" className= "active-vichek-button" />
          <Button link = "/fractal2" text="Фрактал Ньютона" className= "newton-button" />
        </div>
      </div>
    </div>
  );
}