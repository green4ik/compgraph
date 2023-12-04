import BookImage from './images/book.png';
import InfoImage from './images/info.png';
import QuestionImage from './images/question.png'
import FractalImage from './images/fractal.png';
import FractalQuestion from  './images/fractalQuestion.png'
import { Button } from './Button';
import { Link, useNavigate } from 'react-router-dom';
import { BackMenu } from './background';
import { Menucontent } from './menucontent';
export function MainPage1() {
    
    return(
        <div>
        <BackMenu />
        <Menucontent link = "/fractal1"bool1 = {true} bool2 = {false} bool3 = {false} question ={FractalQuestion} pageName = "Фрактали" image = {FractalImage}text = "&nbsp;" questionText={
        <>
          Фракта́л (від лат. fractus — подрібнений, дробовий) — у поширеному розумінні структура, <br />
          що складається з частин, які в певному сенсі подібні до цілого. Більш строге означення <br />
          фрактала вимагає глибоких знань із курсів алгебри і математичного аналізу. <br />
          Однак, не всі самоподібні множини є фрактальними і не всі фрактальні множини є самоподібними. <br />
          Наприклад, будь-який відрізок є самоподібною множиною, але водночас він не є фракталом. <br />
          Водночас існують фрактальні множини, які не є самоподібними.
        </>
      }
    />
    </div>
    ) 
}