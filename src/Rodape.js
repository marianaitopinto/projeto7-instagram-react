export default function Rodape() {
    const  icones = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"] 
    return (
        <div class="fundo-mobile">
            {icones.map(icone => <IconesRodape nomeIcone={icone} />)}
        </div>
    )
}

function IconesRodape(props) {
    return (
        <ion-icon name={props.nomeIcone}></ion-icon>
    )
}