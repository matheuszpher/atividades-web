import React from 'react';


function Questao01A() {
  // Listando os objetos aque serão passados via PROPS para a function Questao01B 
  const lista = [
    { a: 10, b: 3, c: 7 },
    { a: 5, b: -3, c: 9 },
    { a: 1, b: 9, c: 40 }
  ];

  return (
    // Passando a lista de objetos como props para Questao01B 
    <div>
      <h1>Questão 01A</h1>
      <Questao01B lista={lista} />
    </div>
  );
}

function Questao01B({ lista }) {
  // Função para encontrar o maior valor em um objeto
  const encontrarMaior = (obj) => {
    return Math.max(obj.a, obj.b, obj.c);
  };

  return (
    // Mapeando a lista de objetos e mostrando o maior valor de cada 
    <div>
      <h2>Maiores Valores</h2>
      {lista.map((item, index) => (
        <p key={index}>Maior valor do objeto {index + 1}: {encontrarMaior(item)}</p>
      ))}
    </div>
  );
}

export default Questao01A;
