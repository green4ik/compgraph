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
        <Slider onDepthChange={handleDepthChange} />
        <CanvasVichek depth={depth} className="canvasVicsek" />
      </div>
    </div>
  );
}