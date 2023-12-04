import BookImage from './images/book.png';
import InfoImage from './images/info.png';
import QuestionImage from './images/question.png'
import ColorImage from './images/color.png';
import { Button } from './Button';
import { Link, useNavigate } from 'react-router-dom';
import { BackMenu } from './background';
import { Menucontent } from './menucontent';
import ColorQuestion from './images/colorQuestion.png';
export function MainPage2() {
    
    return(
        <div>
        <BackMenu />
        <Menucontent link = "/color1"bool1 = {false} bool2 = {true} bool3 = {false} question = {ColorQuestion} pageName = "Колірні схеми" image = {ColorImage} text = "&nbsp;" questionText={
        <>
         Ко́лірна модель — абстрактна модель опису представлення кольорів у вигляді кортежів (наборів) чисел,<br /> зазвичай з трьох або чотирьох значень, званих колірними компонентами або колірними координатами. <br />
          Разом з методом інтерпретації цих даних (наприклад, визначення умов відтворення та / або перегляду — тобто <br />завдання способу реалізації), множина кольорів колірної моделі визначає колірний простір.<br />
        Також під колірною моделлю необхідно розуміти спосіб відображення колірної гами в дискретному вигляді, для <br />представлення її в обчислювальних, цифрових системах.
        </>
      }
    />
    
    </div>
    ) 
}