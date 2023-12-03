import BookImage from './images/book.png';
import InfoImage from './images/info.png';
import QuestionImage from './images/question.png'
import ColorImage from './images/color.png';
import { Button } from './Button';
import { Link, useNavigate } from 'react-router-dom';
import { BackMenu } from './background';
import { Menucontent } from './menucontent';
export function MainPage2() {
    
    return(
        <div>
        <BackMenu />
        <Menucontent link = "/color1"bool1 = {false} bool2 = {true} bool3 = {false} image = {ColorImage}text = "&nbsp;"/>
    
    </div>
    ) 
}