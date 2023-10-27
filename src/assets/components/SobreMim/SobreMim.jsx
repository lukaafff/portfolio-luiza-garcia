import React from 'react';
import './SobreMim.css';

import Desenho from '../../imgs/Captura de tela 2023-10-15 165913.png'

const SobreMim = () => {
  return (
    <div className="container sobreMim">
      <div className="bloco">
        <img src={Desenho} alt="" className='desenho' />
        <div className="sobre">
          <h4>Sobre Mim</h4>
          <h3>Luiza Garcia</h3>
          <p>Desenvolvedora front end</p>
          <p className='txt'>
            Me chamo Luiza Garcia, nasci em São Caetano do Sul em 2003.
            Estou cursando a faculdade de Ciência da Computação, com previsão de 
            término no segundo semestre de 2026 e pretendo me aprimorar em desenvolver 
            projetos de Front End, pois já possuo grandes conhecimentos em Design Gráfico 
            e sempre gostei especificamente dessa parte de desenvolvimento.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SobreMim