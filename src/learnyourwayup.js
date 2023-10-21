
import BookImage from './images/book.png';
import FractalImage from './images/fractal.png';

export function ImageChanger({image}) {

    console.log({image});
    if(image === BookImage) {
        console.log("1");
    return(
         <div >
        <img className="body-image-book"src = {image}></img>
    <p className="text-style">Learn your way up</p>
     </div>
    )
    }
    else {
        console.log("2");
    return(
         <div >
        <img className="body-image-book"src = {image}></img>
        <p className="text-style">&nbsp;</p>
     </div>
    )
    }
   
}