import RenderIcons from "./RenderIcons"

export default function Header() {
    const  icones = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];
    return (
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <RenderIcons IconName="logo-instagram" />
                    <div class="separador"></div>
                    <img src="img/logo.png" />
                </div>

                <div class="logo-mobile">
                    <RenderIcons IconName="logo-instagram" />
                </div>

                <div class="instagram-mobile">
                    <img src="img/logo.png" />
                </div>

                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div class="icones">
                {icones.map(icone => <RenderIcons IconName={icone} />)}
                </div>

                <div class="icones-mobile">
                    <RenderIcons IconName="paper-plane-outline" />
                </div>
            </div>
        </div>
    )
}