import './App.css';
import { BackMenu } from './background';
import { Routes, Route, Link, Navigate} from 'react-router-dom';
import { MainPage } from './MainPage';
import { MainPage1 } from './MainPage1';
import { MainPage2 } from './MainPage2';
import { FractalPage1 } from './FractalPage1';
import {FractalPage2} from './FractalPage2'
import { ColorPage1 } from './ColorPage1';
import ColorPicker from './ColorPicker';
import { ColorPage2 } from './ColorPage2';
import {FigurePage} from './FigurePage';
function App() {
  return (
   <>
    
    {/* <Menucontent/> */}
    <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
      <Route path = "/home" element = {<MainPage/>}/>
      <Route path = "/home1" element = {<MainPage1/>}/>
      <Route path = "/home2" element = {<MainPage2/>}/>
      <Route path = "/fractal1" element = {<FractalPage1/>}/>
      <Route path = "/fractal2" element = {<FractalPage2/>}/>
      <Route path = "/figure" element = {<FigurePage/>}/>
      <Route path = "/color1" element = {<ColorPage1/>}/>
      <Route path = "/color2" element = {<ColorPage2/>}/>
      <Route path = "/test" element = {<ColorPicker/>}/>
      <Route path = "*" element = {<BackMenu/>}/>
    </Routes>
    </>
  );
}

export default App;
