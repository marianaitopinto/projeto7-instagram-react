import ReactDOM from "react-dom";
import Topo from "./Topo"

function App() {
    return (
        <Topo />
    )
}

const elemento = document.querySelector(".root");
ReactDOM.render(<App />, elemento);