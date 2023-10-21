import BookImage from './images/book.png';
import { BackMenu } from './background';
import { Menucontent } from './menucontent';
export function MainPage() {
    return(
        <div>
        <BackMenu/>
        <Menucontent bool1 = {false} bool2 = {false} bool3 = {false} image = {BookImage} text = "Learn your way up"/>
    </div>
    ) 
}