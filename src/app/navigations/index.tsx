import React from 'react'
import { BrowserRouter,Routes,Route, } from "react-router-dom";
import Home from '../screens/Home';

type Props = {}

export default function Navigation({}: Props) {
  return (
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Home/>} />
     </Routes>
   </BrowserRouter>
  )
}