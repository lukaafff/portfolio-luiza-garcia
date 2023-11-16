import React, { useState } from 'react';
import './Projetos.css';
import projetosData from './Data';

const Projetos = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

  const handleCategoria = (categoria) => {
    setCategoriaSelecionada(categoria);
  };

  const handleTodosProjetos = () => {
    setCategoriaSelecionada(null); 
  };

  const projetosFiltrados = categoriaSelecionada
    ? projetosData.filter((projeto) => projeto.categoria === categoriaSelecionada)
    : projetosData;

  const handleVerProjeto = (url) => {
    window.open(url, '_blank');
  };

  const handleVerGitHub = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="projetos-container">
      <h1 className="titulo">Projetos</h1>
      <div className="botoes-categoria">
        <button onClick={handleTodosProjetos}>Todos os Projetos</button>
        <button onClick={() => handleCategoria('profissionais')}>Projetos Profissionais</button>
        <button onClick={() => handleCategoria('cursos')}>Projetos de Cursos</button>
      </div>
      <div className="card-container">
        {projetosFiltrados.map((projeto) => (
          <div className="cardP" key={projeto.id}>
            <div className="image-container">
              <img src={projeto.imagem} alt={projeto.titulo} />
              <div className="info">
                <h2>{projeto.titulo}</h2>
                <p>{"Tecnologias: "+ projeto.descricao}</p>
                <div className="buttons">
                  <button onClick={() => handleVerProjeto(projeto.linkProjeto)}>Ver projeto</button>
                  <button onClick={() => handleVerGitHub(projeto.linkGitHub)}>Ver no GitHub</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projetos;