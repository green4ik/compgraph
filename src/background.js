import BookImage from './images/book.png';
import InfoImage from './images/info.png';
import QuestionImage from './images/question.png'
import { Button } from './Button';
import { Link, useNavigate } from 'react-router-dom';
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
export function BackMenu(props) {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return(
    
        <div className="top-border">
            <div className="content-top-border">
                <div onClick={() => navigate('/home')} className="left-elements">
                    <img className = "book-image"src = {BookImage}></img>
                </div>
                <div className='page-name'>{props.text} </div>
                <div className="right-elements">
                    <img onClick={openModal} className = "info-image"src = {InfoImage}></img>
                </div>
                </div>    
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className="content-top-border">
                <div className="left-elements">
                    <img className = "book-image"src = {BookImage}></img>
                </div>
                <div className='page-name'>"Довідка користувача" </div>
                <div className="right-elements">
                    <img onClick={closeModal} className = "info-image"src = {InfoImage}></img>
                </div>
                </div>  
                <div className='modal-body'>
                <img  className = "info-image-2"src = {InfoImage}></img>
                    <p>Для початку роботи оберіть тему яка вас цікавить на гловному меню,<br></br>
                         після чого натисніть кнопку ‘’Розпочати’’. <br></br>
                         Ви також можете переглянути коротку інформацію <br></br>
                         про тему натиснувши "?"</p>
                    
                    </div>
      </Modal>
        </div>
    ) 
}