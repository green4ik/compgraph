import logo from './logo.svg';
import './App.css';
import { Button } from './Button';
import { BackMenu } from './background';
import { Menucontent } from './menucontent';
import { Routes, Route, Link, Navigate} from 'react-router-dom';
import { MainPage } from './MainPage';
import { MainPage1 } from './MainPage1';
import { FractalPage1 } from './FractalPage1';
import {FractalPage2} from './FractalPage2'
function App() {
  return (
   <>
    
    {/* <Menucontent/> */}
    <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
      <Route path = "/home" element = {<MainPage/>}/>
      <Route path = "/home1" element = {<MainPage1/>}/>
      <Route path = "/fractal1" element = {<FractalPage2/>}/>
      <Route path = "*" element = {<BackMenu/>}/>
    </Routes>
    </>
  );
}

export default App;
