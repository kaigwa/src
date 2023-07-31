import React from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import BetterWorld  from './components/BetterWorld';
import About from "./components/About";
// import Podcast from './component/Podcast';
import {
  Routes,
  Route,
} from "react-router-dom"
import KaigwaFarm from './components/KaigwaFarm';
import KaigwaCup from './components/KaigwaCup';
import Bububu from './components/Bububu';
import Ellipsisdope from './components/Ellipsisdope';
import Movie from './components/Movie';
import Dar from './components/Dar';
import Guadalajara from './components/Guadalajara';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={  <Home />}/>
        {/* <Route exact path="/Podcast" element={  <Podcast />}/> */}
        <Route exact path="/Projects" element={<Projects />}/> 
        <Route exact path="/BetterWorld" element={<BetterWorld />}/>
        <Route exact path="/About" element={<About />}/>
        <Route exact path="/KaigwaFarm" element={<KaigwaFarm/>}/>
        <Route exact path="/KaigwaCup" element={<KaigwaCup/>}/>
        <Route exact path="/Movie" element={<Movie/>}/>
        <Route exact path="/Bububu" element={<Bububu/>}/>
        <Route exact path="/Ellipsisdope" element={<Ellipsisdope/>}/>
        <Route exact path="/Dar" element={<Dar/>}/>
        <Route exact path="/Guadalajara" element={<Guadalajara/>}/>
      </Routes>
    </div>
  );
}
export default App;
