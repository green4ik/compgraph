import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import { BackMenu } from './background';
import { Slider } from './slider1-10';
import CanvasVichek from './CanvasVichek';
import QuestionImage from './images/question.png';
import BackImage from './images/back.png';
import { Link, useNavigate } from 'react-router-dom';
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
        <div onClick={() => navigate('/home1')} className='images-above'> 
            <img className = 'book-image right'src = {BackImage}></img>
            <img className = 'book-image left'src = {QuestionImage}></img>
        </div>
        <Slider depth={depth} onDepthChange={handleDepthChange} />
        <div className='canvasVicsek'>
        <CanvasVichek depth={depth}  />
        </div>
      </div>
    </div>
  );
}