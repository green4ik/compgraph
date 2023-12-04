import React, { useState } from 'react';
import { BackMenu } from './background';
import QuestionImage from './images/question.png';
import BackImage from './images/back.png';
import ImageProcessing from './ImageProcessing';
import './App.css';
import ImageProcessing2 from './ImageProcessing2';
import { Link, useNavigate } from 'react-router-dom';
import BookImage from './images/book.png';
import CloseImage from './images/close.png';
import ColorImage from './images/color.png'
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
export function ColorPage2() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <BackMenu text = "Колірні схеми"/>
      <div  className='images-above'>
         
          <img onClick={openModal} className='book-image left' src={QuestionImage} alt="Question" />
        </div>
        <ImageProcessing2/>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className="content-top-border">
                <div className="left-elements">
                    <img onClick={openModal} className = "book-image"src = {BookImage}></img>
                </div>
                <div className='page-name'>{"Колірні схеми"}</div>
                <div className="right-elements">
                    <img onClick={closeModal} className = "info-image"src = {CloseImage}></img>
                </div>
                </div>  
                <div className='modal-body'>
                <img  className = "info-image-2"src = {ColorImage}></img>
                    <p style={{ marginLeft: '10px' }}>{<>Тут представлені колірні схеми HSL (Hue,Saturation,Lightness) та <br></br>CMYK(Cyan,Magenta,Yellow,Key).
                     Завантаживши фото на кнопку Upload,<br></br> перетягуючи повзунок можна 
                     змінювати вашу картинку!<br></br> Ви тільки уявіть це!Більше інформації 
                     можна знайти<br></br> за цим посиланням - 
                     <a href = "https://blog.depositphotos.com/ua/kolirni-shemy.html"></a
                     >https://blog.depositphotos.com/ua/kolirni-shemy.html</>}</p>
                    
                    </div>
      </Modal>
    </div>
  );
}