import BookImage from './images/book.png';
import InfoImage from './images/info.png';
import QuestionImage from './images/question.png'
import { Button } from './Button';
export function Menucontent() {
    return (
        <div className="body-content">
            <div className="body-buttons">
        <Button className = "button b1" text ="Фрактали" />
        <Button className = "button b2" text ="Колірні схеми" />
        <Button className = "button b3" text ="Рухомі зображення" />
        </div>
        <div className='body-image'>
            <img className="body-image-book"src = {BookImage}></img>
        <p className="text-style">Learn your way up</p>
        <div className='start-button'>
            <Button className = "button b4" text = "Розпочати"/>
            <img className = "question-body"src = {QuestionImage}></img>
        </div>
        </div>
        
        </div>
    )
}