import React, { useState } from 'react';

const Questao02 = () => {
  // Declara um estado chamado 'virar' e o iniciando 
  const [virar, setVirar] = useState(false);

  // URL das imagens da frente e das costas
  const imgFrente = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png";
  const imgCostas = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/350.png";

  // Função para alternar o estado 'virar' entre true e false
  const alternarImagem = () => {
    setVirar(!virar);
  };

  return (
    // Subindo a imagem do Pokemon de frente e de costa com o estado 'virar' 
    <div>
      <h1>Milotic</h1>
      <img src={virar ? imgCostas : imgFrente} alt="Milotic" />
      {/* Botão que chama a função 'alternarImagem' quando clica */}
      <button onClick={alternarImagem}>
        Virar
      </button>
    </div>
  );
};

export default Questao02;
