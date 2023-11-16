import './App.css';
import { BackMenu } from './background';
import { Routes, Route, Link, Navigate} from 'react-router-dom';
import { MainPage } from './MainPage';
import { MainPage1 } from './MainPage1';
import { FractalPage1 } from './FractalPage1';
import {FractalPage2} from './FractalPage2'
import { ColorPage1 } from './ColorPage1';
function App() {
  return (
   <>
    
    {/* <Menucontent/> */}
    <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
      <Route path = "/home" element = {<MainPage/>}/>
      <Route path = "/home1" element = {<MainPage1/>}/>
      <Route path = "/fractal1" element = {<ColorPage1/>}/>
      <Route path = "/fractal2" element = {<FractalPage2/>}/>
      <Route path = "*" element = {<BackMenu/>}/>
    </Routes>
    </>
  );
}

export default App;
