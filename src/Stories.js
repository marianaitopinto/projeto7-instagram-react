export default function Stories() {
    const nomes = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"];
    return (
        <div class="stories">
            {nomes.map(renderStories)}
            <div class="setinhanomeUsuario">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function renderStories(UserName) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={`./img/${UserName}.svg`} />
            </div>
            <div class="usuario">
                {UserName}
            </div>
        </div>
    )
}