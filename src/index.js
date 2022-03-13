import ReactDOM from "react-dom";
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"

function App() {
    return (
        <div class="root">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

const elemento = document.querySelector(".root");
ReactDOM.render(<App />, elemento);