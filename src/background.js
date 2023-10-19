import BookImage from './images/book.png';
import InfoImage from './images/info.png';
import QuestionImage from './images/question.png'
import { Button } from './Button';
export function BackMenu() {
    return(
    <div className="whole-page">
        <div className="top-border">
            <div className="content-top-border">
                <div  className="left-elements">
                    <img className = "book-image"src = {BookImage}></img>
                </div>
                <div className="right-elements">
                    <img  className = "info-image"src = {InfoImage}></img>
                </div>
                </div>    
        </div>
        
    </div>
    ) 
}