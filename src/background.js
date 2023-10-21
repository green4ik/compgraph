import BookImage from './images/book.png';
import InfoImage from './images/info.png';
import QuestionImage from './images/question.png'
import { Button } from './Button';
import { Link, useNavigate } from 'react-router-dom';
export function BackMenu(props) {
    const navigate = useNavigate();
    return(
    
        <div className="top-border">
            <div className="content-top-border">
                <div onClick={() => navigate('/home')} className="left-elements">
                    <img className = "book-image"src = {BookImage}></img>
                </div>
                <div className='page-name'>{props.text} </div>
                <div className="right-elements">
                    <img  className = "info-image"src = {InfoImage}></img>
                </div>
                </div>    
        </div>
    ) 
}