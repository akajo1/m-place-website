import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './app/screens/Home';
import { ContainerFluid } from './app/styles/styles';
import Navigation from './app/navigations';

function App() {
  return (
    <ContainerFluid>
      <Navigation/>
    </ContainerFluid>
  );
}

export default App;
