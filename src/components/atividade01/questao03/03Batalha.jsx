import React from 'react';

const Hero = ({ name, imagem }) => {
    return (
        <div>
            <h2>Hero: {name}</h2>
            <img src={imagem}
                alt="Pikachu"
                style={{ width: "240px" }}
            />

        </div>
    );
};

const Enemy = ({ name, imagem }) => {
    return (
        <div>
            <h2>Enemy: {name}</h2>
            <img src={imagem}
                alt="Equipe Rocket"
                style={{ width: "240px" }}
            />

        </div>
    );
};

const Arena = ({ children, arena }) => {
    return (
        <div>
            {React.Children.map(
                children, (element) => {
                    return React.cloneElement(element, { arena })
                }

            )}
        </div>
    );
};

const World = ({ arena }) => {
    return (
        <div>
            <Arena arena={arena}>
                <h2>Arena de batalha: {arena}</h2>
                <hr />
                <Hero
                    name="Pikachu"
                    imagem="data:image/jpeg;base64,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"
                />
                <Enemy
                    name="Equipe Rocket"
                    imagem="https://gartic.com.br/imgs/mural/ma/mateus_kun/equipe-rocket.png"
                />
            </Arena>
        </div>
    );
};

export { Hero, Enemy, Arena, World };
