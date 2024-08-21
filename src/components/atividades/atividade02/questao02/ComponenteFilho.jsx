import { useContext } from "react"
import ComponenteNeto from "./ComponenteNeto"
import PokContext from "./MyContext"

const ComponenteFilho = () => {

    const contador = useContext(PokContext)

    return (
        <div>
            <h1>Componente Filho</h1>
            <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${contador+1}.png`}
                    style={{ width: "400px" }}
                    alt={`Pokemon ${contador+1}`}
                />
            <ComponenteNeto />
        </div>
    )
}


export default ComponenteFilho