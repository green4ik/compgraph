import BookImage from './images/book.png';
import InfoImage from './images/info.png';
import QuestionImage from './images/question.png'
import FractalImage from './images/fractal.png';
import { Button } from './Button';
import { Link, useNavigate } from 'react-router-dom';
import { BackMenu } from './background';
import { Menucontent } from './menucontent';
export function MainPage1() {
    
    return(
        <div>
        <BackMenu />
        <Menucontent link = "/fractal1"bool1 = {true} bool2 = {false} bool3 = {false} image = {FractalImage}text = "&nbsp;"/>
    
    </div>
    ) 
}