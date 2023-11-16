import React from 'react'
import './App.css'
import Navbar from "./assets/components/Navbar/Navbar";
import Links from './assets/components/links/Links';
import Inicio from './assets/components/Inicio/Inicio';
import SobreMim from './assets/components/SobreMim/SobreMim';
import Conhecimentos from './assets/components/Conhecimentos/Conhecimentos';
import Projetos from './assets/components/Projetos/Projetos';
import Rodape from './assets/components/Rodape/Rodape';

function App() {

  return (
      <div className='ap'>
        <Navbar/>
        <Links/>
        <Inicio/>
        <SobreMim/>
        <Conhecimentos/>
        <Projetos/>
        {/* <div className="msg">
          <h2>Ainda em construção</h2>
          <h3>Aguarde!</h3>
        </div> */}
        <Rodape/>
      </div>
  )
}

export default App
