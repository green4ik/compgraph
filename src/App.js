import logo from './logo.svg';
import './App.css';
import MyCanvas from './MyCanvas';
import NewtonFractal from './NewtonFractal';

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
     {/* <MyCanvas/> */}
     <NewtonFractal/>
    </div>
=======
   <>
    
    {/* <Menucontent/> */}
    <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
      <Route path = "/home" element = {<MainPage/>}/>
      <Route path = "/home1" element = {<MainPage1/>}/>
      <Route path = "/fractal1" element = {<FractalPage1/>}/>
      <Route path = "/fractal2" element = {<FractalPage2/>}/>
      <Route path = "*" element = {<BackMenu/>}/>
    </Routes>
    </>
>>>>>>> 1026211 (working buttons)
  );
}

export default App;
