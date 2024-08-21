import PokContext from "./MyContext";
import ComponenteFilho from "./ComponenteFilho";

const ComponenteAvo = () => {
    const contador = 1;
    return (
        <PokContext.Provider value={contador}>
            <div>
                <h1>Componente Avô</h1>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${contador}.png`}
                    style={{ width: "400px" }}
                    alt={`Pokemon ${contador}`}
                />
                <ComponenteFilho />
            </div>
        </PokContext.Provider>
    );
};

export default ComponenteAvo;
