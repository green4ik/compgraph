import React, { useState } from 'react';
import { BackMenu } from './background';
import { SliderNewton } from './Sliders/slider-10to10';
import { SliderZoom } from './Sliders/sliderZoom';
import CanvasNewton from './CanvasNewton';
import QuestionImage from './images/question.png';
import BackImage from './images/back.png';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './Button';
import ColorPicker from './ColorPicker';
import './App.css';

export function FractalPage2() {
  const navigate = useNavigate();
  const [constant, setConstant] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [selectedColors, setSelectedColors] = useState(['green', 'blue', 'red', 'purple']);

  const handleConstantChange = (newConstant) => {
    setConstant(newConstant);
  };

  const handleZoomChange = (newZoom) => {
    setZoom(newZoom);
  };

  const handleColorsChange = (newColors) => {
    setSelectedColors(newColors);
  };


  return (
    <div>
      <BackMenu text="Фрактали" />
      <div className='slider-canvas-container'>
        <div  className='images-above'>
          
          <img className='book-image left' src={QuestionImage} alt="Question" />
        </div>
            <SliderNewton onConstantChange={handleConstantChange} />
            {/* <div className='sliderzoom'> */}
            {/* <SliderZoom className='zoom' onZoomChange={handleZoomChange}/> */}
            {/* <ColorPicker colors={selectedColors} onColorsChange={handleColorsChange} /> */}
            {/* </div> */}
        <div className='canvasVicsek'>
            <CanvasNewton constant={constant} zoom={zoom} selectedColors={selectedColors} />
        </div>
        <div className='button-container'>
          <Button  link = "/fractal1"text="Фрактал Вічека" className= "vichek-button" />
          <Button text="Фрактал Ньютона" className= "active-newton-button" />
        </div>
      </div>
    </div>
  );
}