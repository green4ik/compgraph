import React, { useState } from 'react';
import { BackMenu } from './background';
import QuestionImage from './images/question.png';
import BackImage from './images/back.png';
import ImageProcessing from './ImageProcessing';
import { Button } from './Button';
import './App.css';


export function ColorPage1() {

  return (
    <div>
      <BackMenu text = "Колірні схеми"/>
        <ImageProcessing/>

        <div className='button-container'>
          <Button text="HSL" className= "active-vichek-button" />
          <Button link = "/color2" text="CMYK" className= "newton-button" />
          
        </div>
    </div>
  );
}