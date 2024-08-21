import { useContext } from "react"
import PokContext from "./MyContext"

const ComponenteNeto = () => {

    const contador = useContext(PokContext)

    return (
        <div>
            <h1>Componente Neto</h1>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${contador + 2}.png`}
                style={{ width: "400px" }}
                alt={`Pokemon ${contador + 2}`}
            />
        </div>
    )
}


export default ComponenteNeto


