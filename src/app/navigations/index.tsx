import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../screens/About";
import ArticleDetail from "../screens/ArticleDetail";
import Contact from "../screens/Contact";
import EventDetail from "../screens/EventDetail";
import Home from "../screens/Home";
import Inscription from "../screens/Inscription";
import Login from "../screens/Login";
import ScannerLogin from "../screens/scanner/Login";
import More from "../screens/More";
import News from "../screens/News";
import Organisateur from "../screens/Organisateur";
import Profil from "../screens/Profil";
import Videos from "../screens/Videos";
import Code from "../screens/Code";
import Search from "../screens/Search";
import Pay from "../screens/pay";
import Scanner from "../screens/scanner/Scanner";
import DashBoard from "../screens/scanner/DashBoard";
import AskPaie from "../screens/scanner/AskPaie";

type Props = {};

export default function Navigation({}: Props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/more" element={<More />} />
        <Route path="/organisateur" element={<Organisateur />} />
        <Route path="/login" element={<Login />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/search" element={<Search />} />
        <Route path="/articleDetail/:token" element={<ArticleDetail />} />
        <Route path="/eventDetail/:token" element={<EventDetail />} />
        <Route path="/code/:token" element={<Code />} />
        <Route path="/pay/:user/:event" element={<Pay />} />
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/scanner/login/:user" element={<ScannerLogin />} />
        <Route path="/scanner/dashboard" element={<DashBoard />} />
        <Route path="/scanner/askpaie" element={<AskPaie />} />
      </Routes>
    </BrowserRouter>
  );
}
