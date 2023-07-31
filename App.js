import React from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Blog  from './components/Blog';
import About from "./components/About";
// import Podcast from './component/Podcast';
import {
  Routes,
  Route,
} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={  <Home />}/>
        {/* <Route exact path="/Podcast" element={  <Podcast />}/> */}
        <Route exact path="/Projects" element={<Projects />}/> 
        <Route exact path="/Blog" element={<Blog />}/>
        <Route exact path="/About" element={<About />}/>
      </Routes>
    </div>
  );
}
export default App;
