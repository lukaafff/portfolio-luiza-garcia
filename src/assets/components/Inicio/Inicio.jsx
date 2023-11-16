import React from 'react';
import './Inicio.css';

import DesenhoLuiza from '../../imgs/luiza desenho.png';

const Inicio = () => {
  return (
    <div id='inicio'>
        <div className='container inicio' >
            <img src={DesenhoLuiza} alt="Ilustração Luiza Garcia" className='desenhoIMG'/>
            <div className='apresentacao'>
                <h1>Olá <span><i class='bx bxs-hand'></i></span> ,</h1>
                <h2>Eu sou a Luiza</h2>
                <h3>Desenvolvedora front-end</h3>
            </div>
        </div>
        
    </div>
  )
}

export default Inicio