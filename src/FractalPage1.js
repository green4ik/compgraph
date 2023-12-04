import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import { BackMenu } from './background';
import { Slider } from './Sliders/slider1-10';
import CanvasVichek from './CanvasVichek';
import QuestionImage from './images/question.png';
import BackImage from './images/back.png';
import { Link, useNavigate } from 'react-router-dom';
import BookImage from './images/book.png';
import CloseImage from './images/close.png';
import { Button } from './Button';
import FractalImage from './images/fractal.png';
import './App.css';
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
     
     <div className="modal">
     {children}
              </div>
    </div>
  );
};
export function FractalPage1() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
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
          
          <img onClick={openModal} className='book-image left' src={QuestionImage} alt="Question" />
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
      <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className="content-top-border">
                <div className="left-elements">
                    <img className = "book-image"src = {BookImage}></img>
                </div>
                <div className='page-name'>{"Фрактали"}</div>
                <div className="right-elements">
                    <img onClick={closeModal} className = "info-image"src = {CloseImage}></img>
                </div>
                </div>  
                <div className='modal-body'>
                <img  className = "info-image-2"src = {FractalImage}></img>
                    <p style={{ marginLeft: '10px' }}>{<>Це фрактали Вічека та Ньютона, для початку роботи перетягніть будь-який <br />повзунок і спостерігайте за змінами!!! Якщо ви заохочені детальніше <br />розібратися у цих фракталах, можете дізнатися більше інформації<br /> прямо тут - <a href = "https://uk.wikipedia.org/wiki/Фрактал">https://uk.wikipedia.org/wiki/Фрактал</a></>}</p>
                    
                    </div>
      </Modal>
    </div>
  );
}