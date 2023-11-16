import React from 'react';
import './Conhecimentos.css';

const tecnologias = [
  { nome: 'HTML', id: 1, icon: <i class='bx bxl-html5 tech'></i> },
  { nome: 'CSS', id: 2, icon: <i class='bx bxl-css3 tech'></i>},
  { nome: 'JavaScript', id: 3, icon: <i class='bx bxl-javascript tech'></i> },
  { nome: 'React', id: 4, icon: <i class='bx bxl-react tech'></i> },
  { nome: 'Git', id: 5, icon: <i class='bx bxl-git tech'></i> },
  { nome: 'GitHub', id: 6, icon: <i class='bx bxl-github tech'></i> },
  { nome: 'Figma', id: 7, icon: <i class='bx bxl-figma tech'></i>  }
];

const Conhecimentos = () => {
  return (
    <div className='container conhecimentos' id='conhecimentos'>
      <div className="texto">
        <h1>Conhecimentos</h1>
        <p>Essas são as tecnologias eu estou familiarizada</p>
      </div>
      <div className="cards">
        {tecnologias.map(tecnologia => (
          <div className="card" key={tecnologia.id} data-text={tecnologia.nome}>
            {tecnologia.icon}
          </div>
        ))}
      </div>
    </div>
  );
}


export default Conhecimentos;
