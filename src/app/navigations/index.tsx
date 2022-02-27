import React from 'react'
import { BrowserRouter,Routes,Route, } from "react-router-dom";
import About from '../screens/About';
import Contact from '../screens/Contact';
import Home from '../screens/Home';
import More from '../screens/More';
import News from '../screens/News';
import Organisateur from '../screens/Organisateur';
import Videos from '../screens/Videos';

type Props = {}

export default function Navigation({}: Props) {
  return (
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/news" element={<News/>} />
      <Route path="/videos" element={<Videos/>} />
      <Route path="/more" element={<More/>} />
      <Route path="/Organisateur" element={<Organisateur/>} />
     </Routes>
   </BrowserRouter>
  )
}