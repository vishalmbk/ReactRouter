import React from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Content from './Components/Content';
import {BrowserRouter,Link,Route,Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <nav>
       <Link to="/"> HOME </Link>
       <Link to="/about"> ABOUT </Link>
       <Link to="/content"> CONTENT </Link>
     </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/content" element={<Content/>}/>

      </Routes>

     </BrowserRouter>
    
       
    </div>
  );
}

export default App;
