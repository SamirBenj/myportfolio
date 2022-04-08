import './App.css';
import './styles/navbar.css'
import React from 'react'
import * as ReactDOM from "react-dom";

import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from './screens/home';
import MyProjects from './screens/myProjects';
import ContactPage from './screens/contact';
import ResumePage from './screens/resume';
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="home" element={<Home/>}/>
      <Route path='Projet' element={<MyProjects/>}></Route>
      <Route path='Contact' element={<ContactPage/>}></Route>
      <Route path='Resume' element={<ResumePage/>}></Route>

      </Routes>
    </BrowserRouter>
    
  );
}



export default App;
