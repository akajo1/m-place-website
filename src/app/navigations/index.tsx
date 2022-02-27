import React from 'react'
import { BrowserRouter,Routes,Route, } from "react-router-dom";
import About from '../screens/About';
import Contact from '../screens/Contact';
import Home from '../screens/Home';
import News from '../screens/News';
import Organisateur from '../screens/Organisateur';

type Props = {}

export default function Navigation({}: Props) {
  return (
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/news" element={<News/>} />
      <Route path="/Organisateur" element={<Organisateur/>} />
     </Routes>
   </BrowserRouter>
  )
}