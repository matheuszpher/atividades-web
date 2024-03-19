const Filho = ({ altura, peso }) => {
    const calcularIMC = (altura, peso) => {
        const imc = peso / (altura * altura);
        return imc.toFixed(2);
    };

    const metricasMensagem = (imc) => {
        if (imc < 18) {
            return <h3>Abaixo do peso!</h3>;
        } else if (imc > 25) {
            return <h3>Acima do peso!</h3>;
        } else {
            return <h3>Peso ideal!</h3>;
        }
    };

    const imc = calcularIMC(altura, peso);
    const exibirMensagem = metricasMensagem(imc);

    return (
        <>
            <h2>Métricas do paciente:</h2>
            <h3>Altura: {altura}</h3>
            <h3>Peso: {peso}</h3>
            <hr />
            <h2>Valor IMC:</h2>
            <h3>IMC: {imc}</h3>
            <hr />
            <h2>Laudo:</h2>
            <h3>{exibirMensagem}</h3>
        </>
    );
};

export default Filho;