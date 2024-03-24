import { useContext } from "react";
import PokemonContext from "./PokemonContext";
import PokemonIncrementar from "./BotaoIncrementar";

const PokemonImagem = () => {
    const numeroDoPokedex = useContext(PokemonContext).numeroDoPokedex;
    const URL =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" +
        numeroDoPokedex +
        ".png";
    return (
        <div>
            <img alt="pokemon" src={URL} width={150}></img>
            <PokemonIncrementar />
        </div>
    );
};
export default PokemonImagem;