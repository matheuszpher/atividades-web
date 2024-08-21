import PokemonContext from "./PokemonContext";
import { useContext } from "react";

const PokemonIncrementar = () => {
  const { setNumeroDoPokedex, numeroDoPokedex } = useContext(PokemonContext);

  return (
    <div
      onClick={() => {
        setNumeroDoPokedex(numeroDoPokedex + 1);
      }}
    >
      <button>Incrementar</button>
    </div>
  );
};
export default PokemonIncrementar;