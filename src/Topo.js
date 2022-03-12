export default function Topo() {
    const  icones = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];
    return (
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <IconesTopo nomeIcone="logo-instagram" />
                    <div class="separador"></div>
                    <img src="img/logo.png" />
                </div>

                <div class="logo-mobile">
                    <IconesTopo nomeIcone="logo-instagram" />
                </div>

                <div class="instagram-mobile">
                    <img src="img/logo.png" />
                </div>

                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div class="icones">
                {icones.map(icone => <IconesTopo nomeIcone={icone} />)}
                </div>

                <div class="icones-mobile">
                    <IconesTopo nomeIcone="paper-plane-outline" />
                </div>
            </div>
        </div>
    )
}

function IconesTopo(props) {
    return (
        <ion-icon name={props.nomeIcone}></ion-icon>
    )
}