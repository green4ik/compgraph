import React, { useState } from 'react';
import { BackMenu } from './background';
import QuestionImage from './images/question.png';
import BackImage from './images/back.png';
import ImageProcessing from './ImageProcessing';
import './App.css';
import ImageProcessing2 from './ImageProcessing2';
import { Link, useNavigate } from 'react-router-dom';

export function ColorPage2() {
  const navigate = useNavigate();
  return (
    <div>
      <BackMenu text = "Колірні схеми"/>
      <div  className='images-above'>
          
          <img className='book-image left' src={QuestionImage} alt="Question" />
        </div>
        <ImageProcessing2/>
    </div>
  );
}