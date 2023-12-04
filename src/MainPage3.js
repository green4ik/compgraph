import BookImage from './images/book.png';
import InfoImage from './images/info.png';
import QuestionImage from './images/question.png'
import FigureImage from './images/figure.jfif';
import { Button } from './Button';
import { Link, useNavigate } from 'react-router-dom';
import { BackMenu } from './background';
import { Menucontent } from './menucontent';
export function MainPage3() {
    
    return(
        <div>
        <BackMenu />
        <Menucontent link = "/figure"bool1 = {false} bool2 = {false} bool3 = {true} image = {FigureImage}text = "&nbsp;"/>
    
    </div>
    ) 
}