import ColorTheme from "./MyColorContext";

const FunctionContextB = () => {
    return (
        <ColorTheme.Consumer>
            {(value) => {
                return (
                    <div>
                        <h1 style={{ color: value.bkgB }}>Contexto B</h1>
                    </div>
                );
            }}
        </ColorTheme.Consumer>
    );
};

export default FunctionContextB;