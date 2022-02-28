import React from 'react'
import { BrowserRouter,Routes,Route, } from "react-router-dom";
import About from '../screens/About';
import ArticleDetail from '../screens/ArticleDetail';
import Contact from '../screens/Contact';
import EventDetail from '../screens/EventDetail';
import Home from '../screens/Home';
import Inscription from '../screens/Inscription';
import Login from '../screens/Login';
import More from '../screens/More';
import News from '../screens/News';
import Organisateur from '../screens/Organisateur';
import Profil from '../screens/Profil';
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
      <Route path="/eventDetail/:token" element={<EventDetail/>} />
      <Route path="/articleDetail/:token" element={<ArticleDetail/>} />
      <Route path="/videos" element={<Videos/>} />
      <Route path="/more" element={<More/>} />
      <Route path="/Organisateur" element={<Organisateur/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/inscription" element={<Inscription/>} />
      <Route path="/profil" element={<Profil/>} />
     </Routes>
   </BrowserRouter>
  )
}