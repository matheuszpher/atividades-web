import { useState } from "react";
import PokemonContext from "./PokemonContext";
import PokemonImagem from "./PokemonImage";

const PokemonComponent = () => {
  const [numeroDoPokedex, setNumeroDoPokedex] = useState(1);
  return (
    <div>
      <div>
        <h2>O numero do pokedex: {numeroDoPokedex}</h2>
        <PokemonContext.Provider
          value={{ numeroDoPokedex, setNumeroDoPokedex }}
        >
          <PokemonImagem />
        </PokemonContext.Provider>
      </div>
    </div>
  );
};
export default PokemonComponent;