import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import { BackMenu } from './background';
import { Slider } from './slider1-10';
import CanvasVichek from './CanvasVichek';
import './App.css'

export function FractalPage1() {
  const [depth, setDepth] = useState(0); // Initial depth value

  const handleDepthChange = (newDepth) => {
    setDepth(newDepth);
  };

  return (
    <div>
      <BackMenu text="Фрактали" />
      <div className='slider-canvas-container'>
<<<<<<< HEAD
        <Slider onDepthChange={handleDepthChange} />
        <CanvasVichek depth={depth} className="canvasVicsek" />
=======
        <div onClick={() => navigate('/home1')} className='images-above'>
          <img className='book-image right' src={BackImage} alt="Back" />
          <img className='book-image left' src={QuestionImage} alt="Question" />
        </div>
        <Slider depth={depth} onDepthChange={handleDepthChange} />
        <div className='canvasVicsek'>
          <CanvasVichek depth={depth} />
        </div>
        <div className='button-container'>
          <Button text="Vicsek" className= "active-vichek-button" />
          <Button link = "/fractal2" text="Newton" className= "newton-button" />
        </div>
>>>>>>> 1026211 (working buttons)
      </div>
    </div>
  );
}