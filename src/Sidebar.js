export default function Sidebar() {
    return (
        <div class="sidebar">
            <User user="catanacomics" userName="Catana" />
            <Sugestions />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
                Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2022 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

function SugestionModel({ name, reason }) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={`./img/${name}.svg`} />
                <div class="texto">
                    <div class="nome">{name}</div>
                    <div class="razao">{reason}</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    )
}

function Sugestions() {
    const sugestao = [
        { name:"bad.vibes.memes", reason:"Segue você" },
        { name:"chibirdart", reason:"Segue você" },
        { name:"razoesparaacreditar", reason:"Novo no Instagram" },
        { name:"adorable_animals", reason:"Segue você" },
        { name:"smallcutecats", reason:"Segue você" },
    ];
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugestao.map(SugestionModel)}
            
        </div>
    )
}

function User(props) {
    return (
        <div class="usuario">
                <img src="./img/catanacomics.svg" />
                <div class="texto">
                    <strong>{props.user}</strong>
                    {props.userName}
                </div>
            </div>
    )
}