import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import { BackMenu } from './background';
import { Slider } from './slider1-10';
export function FractalPage1() {
  
  return (
   <div>
    <BackMenu text = "Фрактали"/>
    <Slider/>
   </div>
  );
}


