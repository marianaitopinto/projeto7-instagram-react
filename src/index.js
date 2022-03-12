import ReactDOM from "react-dom";
import Topo from "./Topo"
import Corpo from "./Corpo"
import Rodape from "./Rodape"

function App() {
    return (
        <div class="root">
            <Topo />,
            <Corpo />,
            <Rodape />
        </div>
    )
}

const elemento = document.querySelector(".root");
ReactDOM.render(<App />, elemento);