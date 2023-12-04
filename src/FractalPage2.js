import React, { useState } from 'react';
import { BackMenu } from './background';
import { SliderNewton } from './Sliders/slider-10to10';
import { SliderZoom } from './Sliders/sliderZoom';
import CanvasNewton from './CanvasNewton';
import QuestionImage from './images/question.png';
import BookImage from './images/book.png';
import CloseImage from './images/close.png';
import FractalImage from './images/fractal.png';
import BackImage from './images/back.png';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './Button';
import ColorPicker from './ColorPicker';
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <BackMenu text="Фрактали" />
      <div className='slider-canvas-container'>
        <div  className='images-above'>
          
          <img onClick={openModal} className='book-image left' src={QuestionImage} alt="Question" />
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
    </div>
  );
}