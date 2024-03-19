const PlacaMae = ({ nome, preco }) => {
    return (
        <div>
            <hr />
            <h2>Placa Mãe: {nome}</h2>
            <h2>Valor: R${preco}</h2>
        </div>
    )
}

const Memoria = ({ nome, preco }) => {
    return (
        <div>
            <hr />
            <h2>Memória: {nome}</h2>
            <h2>Valor: R${preco}</h2>
        </div>
    )
}

const PlacaDeVideo = ({ nome, preco }) => {
    return (
        <div>
            <hr />
            <h2>Placa de vídeo: {nome}</h2>
            <h2>Valor: R${preco}</h2>
        </div>
    )
}

export { Memoria, PlacaDeVideo, PlacaMae };