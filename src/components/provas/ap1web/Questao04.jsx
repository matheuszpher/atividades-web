import React, { useState, useEffect } from 'react';

const Questao04 = () => {
    // Estados para armazenar as capitais de maior e menor população
    const [capitalMaior, setCapitalMaior] = useState('');
    const [capitalMenor, setCapitalMenor] = useState('');

    // Promise que retorna um array simulando a resposta da API
    const obterDados = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { "capital": ["Dublin"], "population": 4994724 },
                    { "capital": ["Nicosia"], "population": 1207361 },
                    { "capital": ["Madrid"], "population": 47351567 }
                ]);
            }, ); 
        });
    };

    useEffect(() => {
        // Chamando a Promise e tratando a resposta com then-catch
        obterDados()
            .then((data) => {
                // Variaveis para armazenar a maior e menor população
                let maiorPopulacao = 0;
                let menorPopulacao = Infinity;
                let indiceMaior = 0;
                let indiceMenor = 0;

                // Iterando sobre o array de dados para encontrar as capitais de maior e menor população
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

                // Atualizando os estados com as capitais de maior e menor população
                setCapitalMaior(data[indiceMaior].capital[0]);
                setCapitalMenor(data[indiceMenor].capital[0]);
            })
            .catch((error) => console.log(error)); // Tratando erros, caso ocorram
    }, []); 

    return (
        // Exibindo a captital com maior e menor população
        <div>
            <h1>Capitais com maior e menor população na Europa</h1>
            <p><strong>Maior População:</strong> {capitalMaior}</p>
            <p><strong>Menor População:</strong> {capitalMenor}</p>
        </div>
    );
};

export default Questao04;
