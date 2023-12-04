import BookImage from './images/book.png';
import InfoImage from './images/info.png';
import QuestionImage from './images/question.png'
import FigureImage from './images/figure.png';
import { Button } from './Button';
import { Link, useNavigate } from 'react-router-dom';
import { BackMenu } from './background';
import { Menucontent } from './menucontent';
import FigureQuestion from './images/figureQuestion.png';
export function MainPage3() {
    
    return(
        <div>
        <BackMenu />
        <Menucontent link = "/figure"bool1 = {false} bool2 = {false} bool3 = {true} question = {FigureQuestion} pageName = "Рухомі збораження" image = {FigureImage}text = "&nbsp;" questionText={
        <>
         Відбиття, дзеркальне відбиття, дзеркальна симетрія — рух евклідового простору, множина нерухомих точок якого,<br /> є гіперплощиною (у випадку тримірного простору — просто площиною).

        Термін «дзеркальна симетрія» використовується<br /> також для опису відповідного типу симетрії об'єкта, тобто, коли об'єкт під час операції відбиття переходить сам у себе.

        <br />Це математичне поняття описує співвідношення в оптиці об'єктів і їх (уявних) зображень у разі відбиття у пласкому дзеркалі,<br /> а також багато які закони симетрії (у кристалографії, хімії, фізиці, біології і тощо, а також у мистецтві).
        </>
      }
    />
    </div>
    ) 
}