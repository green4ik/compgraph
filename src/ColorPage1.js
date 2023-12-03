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
      <div  className='images-above'>
         
          <img className='book-image left' src={QuestionImage} alt="Question" />
        </div>
        <ImageProcessing/>
    </div>
  );
}