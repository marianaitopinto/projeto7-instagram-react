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

function renderStories(userName) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={`./img/${userName}.svg`} />
            </div>
            <div class="usuario">
                {userName}
            </div>
        </div>
    )
}