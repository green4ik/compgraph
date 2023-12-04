import BookImage from './images/book.png';
import InfoImage from './images/info.png';
import FractalImage from './images/fractal.png';
import CloseImage from './images/close.png';
import QuestionImage from './images/question.png'
import { Button } from './Button';
import { ImageChanger } from './learnyourwayup';
import {Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
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
export function Menucontent(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
        
      <div className="body-content">
      <div className="body-buttons">
          <Button link="/home1" isItalic={props.bool1} className="button b1" text="Фрактали" />
          <Button link="/home2" isItalic={props.bool2} className="button b2" text="Колірні схеми" />
          <Button link="/home3" isItalic={props.bool3} className="button b3" text="Рухомі зображення" />
      </div>
      <div className='right-body'>
          <div className='body-image'>
              <img className="body-image-book" src={props.image}></img>
              <p className="text-style">{props.text}</p>
          </div>
          <div className='start-button'>
              <Button link={props.link} className="button b4" text="Розпочати" />
              {/* Add onClick handler to open the modal */}
              <img onClick={openModal} className="question-body" src={QuestionImage} alt="Question Mark" />
          </div>
      </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className="content-top-border">
                <div className="left-elements">
                    <img className = "book-image"src = {BookImage}></img>
                </div>
                <div className='page-name'>{props.pageName}</div>
                <div className="right-elements">
                    <img onClick={closeModal} className = "info-image"src = {CloseImage}></img>
                </div>
                </div>  
                <div className='modal-body'>
                <img  className = "info-image-2"src = {props.question}></img>
                    <p style={{ marginLeft: '10px' }}>{props.questionText}</p>
                    
                    </div>
      </Modal>
        </div>
    
    )
}
