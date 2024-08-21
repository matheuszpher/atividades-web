import React, { useState, useEffect } from 'react';

const Questao03 = () => {
  // Declarando os dois estados para armazenar as capitais e a população
  const [capitalMaior, setCapitalMaior] = useState('');
  const [capitalMenor, setCapitalMenor] = useState('');

  useEffect(() => {
    // Requisição para obter os dados dos países 
    fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
      .then((response) => response.json())
      .then((data) => {
        // Iniciando variáveis para armazenar os valores de maior e menor 
        let maiorPopulacao = 0;
        let menorPopulacao = Infinity;
        let indiceMaior = 0;
        let indiceMenor = 0;

        // Itera sobre cada pais para encontrar as capitais com maior e menor
        data.forEach((country, index) => {
          if (country.population > maiorPopulacao) {
            maiorPopulacao = country.population;
            indiceMaior = index;
          }

          if (country.population < menorPopulacao) {
            menorPopulacao = country.population;
            indiceMenor = index;
          }
        });

        // Atualizando os estados com as capitais 
        setCapitalMaior(data[indiceMaior].capital[0]);
        setCapitalMenor(data[indiceMenor].capital[0]);
      })
      .catch((error) => console.log(error)); // Captura e exibe erros da requisição
  }, []);

  // Mostra as informações na tela
  return (
    <div>
      <h1>Capitais com maior e menor população na Europa</h1>
      <p><strong>Maior População:</strong> {capitalMaior}</p>
      <p><strong>Menor População:</strong> {capitalMenor}</p>
    </div>
  );
};

export default Questao03;
