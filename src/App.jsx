import React from 'react'
import './App.css'
import Navbar from "./assets/components/Navbar/Navbar";
import Links from './assets/components/links/Links';
import Inicio from './assets/components/Inicio/Inicio';
import SobreMim from './assets/components/SobreMim/SobreMim';

function App() {

  return (
      <div>
        <Navbar/>
        <Links/>
        <Inicio/>
        <SobreMim/>
      </div>
  )
}

export default App
