import React from 'react'
import './App.css'
import Navbar from "./assets/components/Navbar/Navbar";
import Links from './assets/components/links/Links';
import Inicio from './assets/components/Inicio/Inicio';
import SobreMim from './assets/components/SobreMim/SobreMim';
import Conhecimentos from './assets/components/Conhecimentos/Conhecimentos';

function App() {

  return (
      <div className='ap'>
        <Navbar/>
        <Links/>
        <Inicio/>
        <SobreMim/>
        <Conhecimentos/>
        <div className="msg">
          <h2>Ainda em construção</h2>
          <h3>Aguarde!</h3>
        </div>
      </div>
  )
}

export default App
